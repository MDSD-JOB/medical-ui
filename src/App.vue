<template>
  <div id="app">
    <h1>JsonEditor</h1>

    <JsonViewer :data="jsonData" />
    <JsonEditor v-model="jsonData" />

    <h1>AntTable</h1>

    <a-table :columns="columns" :dataSource="dataSource" :expandIcon="null" />

    <h1>ProTable</h1>
    <ProTable
      :loading="loading"
      :columns="columns"
      :dataSource="dataSource"
      :preExpand="handlePreExpand"
      :expandedRowKeys.sync="expandedRowKeys"
      expandLoad
    />

    <!-- @expand="handleExpand" -->

    <h1>ChartsPane</h1>
    <ChartsPane ref="ChartsPane" :value="optionsGroup" @change="changeTest" />

    <h1>Promodal</h1>
    <a-button @click="modalVisible = true">Call</a-button>
    <ProModal v-model="modalVisible">
      <JsonEditor v-model="jsonData" />
    </ProModal>
  </div>
</template>

<script>
// import ProTable from "../lib/ProTable";
// import ChartsPane from "../lib/ChartsPane";
import ProTable from "./components/ProTable/index";
import ChartsPane from "./components/ChartsPane";
import ProModal from "./components/ProModal";
import JsonEditor from "./components/JsonEditor";
// import JsonEditor from "../lib/JsonEditor";
import JsonViewer from "./components/JsonViewer";
import "./components/style";

const getPieOptions = () => {
  return {
    title: {
      text: "天气情况统计",
      subtext: "虚构数据",
      left: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      // orient: 'vertical',
      // top: 'middle',
      bottom: 10,
      left: "center",
      data: ["西凉", "益州", "兖州", "荆州", "幽州"]
    },
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],
        selectedMode: "single",
        data: [
          {
            value: 1548,
            name: "幽州",
            label: {
              formatter: [
                "{title|{b}}{abg|}",
                "  {weatherHead|天气}{valueHead|天数}{rateHead|占比}",
                "{hr|}",
                "  {Sunny|}{value|202}{rate|55.3%}",
                "  {Cloudy|}{value|142}{rate|38.9%}",
                "  {Showers|}{value|21}{rate|5.8%}"
              ].join("\n"),
              backgroundColor: "#eee",
              borderColor: "#777",
              borderWidth: 1,
              borderRadius: 4
            }
          },
          { value: 535, name: "荆州" },
          { value: 510, name: "兖州" },
          { value: 634, name: "益州" },
          { value: 735, name: "西凉" }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
};

export default {
  name: "App",
  components: {
    ProTable,
    ChartsPane,
    ProModal,
    JsonEditor,
    // eslint-disable-next-line vue/no-unused-components
    JsonViewer
  },
  data() {
    return {
      jsonData: [
        {
          a: [1],
          // a: [1, 2],
          // // a: [1, 2, 3],
          d: { c: { a: [] } },
          b: false,
          c: undefined
        },
        [1123]
      ],
      modalVisible: false,
      optionsGroup: [],
      loading: false,
      expandedRowKeys: [],
      columns: [
        {
          title: "频道规模",
          dataIndex: "a",
          selectable: true
        },
        {
          title: "同时在线人数",
          dataIndex: "b",
          selectable: true
        },
        {
          title: "占比",
          dataIndex: "c",
          selectable: true
        }
      ],
      dataSource: [
        {
          key: 1,
          a: 2,
          b: 36564,
          c: 4,
          children: []
        },
        {
          key: 2,
          a: 2,
          b: 3,
          c: 4,
          children: []
        },
        {
          key: 3,
          a: 2,
          b: 3,
          c: 4
        }
      ]
    };
  },
  created() {
    setTimeout(() => {
      this.dataSource = [...this.dataSource];
    }, 5000);
  },
  mounted() {
    this.$refs.ChartsPane.massMergeOption([getPieOptions()]);

    setTimeout(() => {
      this.$refs.ChartsPane.massMergeOption([getPieOptions(), getPieOptions()]);
    }, 1000);
  },
  methods: {
    changeTest(value) {
      console.log(value);
      this.optionsGroup = value;
    },
    async handlePreExpand(expanded, row, index, next) {
      // 当前未展开, 将要展开
      if (!expanded && !this.dataSource[index].$loaded) {
        this.loading = true;
        // const children = await this.getNestRowData();
        const children = [];
        await new Promise(resolve => setTimeout(resolve, 2000));
        this.loading = false;
        this.dataSource[index].children = children;
        this.dataSource[index].$loaded = true;
        this.dataSource = [...this.dataSource];
      }

      setTimeout(next);
    },

    async getNestRowData() {
      return new Array(5).fill(Date.now()).map((item, index) => ({
        key: item + "-" + index,
        a: 2,
        b: 3,
        c: 4
      }));
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
