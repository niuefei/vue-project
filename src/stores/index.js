import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      // 路由相关
      page: "1",
      clientWidth1: 0,
      clientWidth2: 0,
      // 当前的设备
      // 数字数据type为1，否则为0
      devices: [
          {
            id: "0-0",
            data1: [
              {
                name: "浊度",
                value: 9.3,
                status: "正常",
                type: 1,
              },
              {
                name: "TDS",
                value: 89.3,
                status: "正常",
                type: 1,
              },
              {
                name: "COD",
                value: 8.9,
                status: "正常",
                type: 1,
              },
              {
                name: "BOD",
                value: 18.6,
                status: "正常",
                type: 1,
              },
              {
                name: "氨氮",
                value: 0.39,
                status: "正常",
                type: 0,
              },
              {
                name: "PH",
                value: 5.6,
                status: "异常",
                type: 1,
              },
              {
                name: "铅金属含量",
                value: 0.016,
                status: "正常",
                type: 0,
              },
              {
                name: "总流量",
                value: 0.41,
                status: "正常",
                type: 0,
              },
              {
                name: "设备电量",
                value: "80%",
                status: "正常",
                type: 0,
              },
              {
                name: "连接状态",
                value: '/',
                status: "正常",
                type: 0,
              },
              {
                name: "故障状态",
                value: "/",
                status: "正常",
                type: 0,
              },
              {
                name: "污染状态",
                value: '/',
                status: "可能污染",
                type: 0,
              },
              {
                name: "传输速率",
                value: "30min/次",
                status: "正常",
                type: 0,
              },
              {
                name: "采集状态",
                value: "15min/次",
                status: "正常",
                type: 0,
              },
              {
                name: "边缘计算模式",
                value: "二",
                status: "正常",
                type: 0,
              },
            ],
          },
        {
          id: "0-1",
          data1: [
            {
              name: "浊度",
              value: 1.6,
              status: "正常",
              type: 1,
            },
            {
              name: "TDS",
              value: 109.7,
              status: "正常",
              type: 1,
            },
            {
              name: "COD",
              value: 9.1,
              status: "正常",
              type: 1,
            },
            {
              name: "BOD",
              value: 19.3,
              status: "正常",
              type: 1,
            },
            {
              name: "氨氮",
              value: 0.53,
              status: "异常",
              type: 0,
            },
            {
              name: "PH",
              value: 5.3,
              status: "异常",
              type: 1,
            },
            {
              name: "铅金属含量",
              value: 0.019,
              status: "正常",
              type:0,
            },
            {
              name: "总流量",
              value: 0.33,
              status: "正常",
              type: 0,
            },
            {
              name: "设备电量",
              value: "83%",
              status: "正常",
              type: 0,
            },
            {
              name: "连接状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "故障状态",
              value: "/",
              status: "正常",
              type: 0,
            },
            {
              name: "污染状态",
              value: '/',
              status: "轻微污染",
              type: 0,
            },
            {
              name: "传输速率",
              value: "10min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "采集状态",
              value: "30min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "边缘计算模式",
              value: "二",
              status: "正常",
              type: 0,
            },
          ],
        },
        {
          id: "0-2",
          data1: [
            {
              name: "浊度",
              value: 13.7,
              status: "异常",
              type: 1,
            },
            {
              name: "TDS",
              value: 129.7,
              status: "异常",
              type: 1,
            },
            {
              name: "COD",
              value: 11.9,
              status: "异常",
              type: 1,
            },
            {
              name: "BOD",
              value: 23.6,
              status: "异常",
              type: 1,
            },
            {
              name: "氨氮",
              value: 0.61,
              status: "正常",
              type: 0,
            },
            {
              name: "PH",
              value: 5.6,
              status: "正常",
              type: 1,
            },
            {
              name: "铅金属含量",
              value: 0.026,
              status: "正常",
              type: 0,
            },
            {
              name: "总流量",
              value: 0.35,
              status: "正常",
              type: 0,
            },
            {
              name: "设备电量",
              value: "87%",
              status: "正常",
              type: 0,
            },
            {
              name: "连接状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "故障状态",
              value: "/",
              status: "正常",
              type: 0,
            },
            {
              name: "污染状态",
              value: '/',
              status: "严重污染",
              type: 0,
            },
            {
              name: "传输速率",
              value: "1min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "采集状态",
              value: "155min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "边缘计算模式",
              value: "三",
              status: "正常",
              type: 0,
            },
          ],
        },

        {
          id: "1-0",
          data1: [
            {
              name: "浊度",
              value: 9.3,
              status: "正常",
              type: 1,
            },
            {
              name: "TDS",
              value: 86.3,
              status: "正常",
              type: 1,
            },
            {
              name: "COD",
              value: 7.9,
              status: "正常",
              type: 1,
            },
            {
              name: "BOD",
              value: 17.6,
              status: "正常",
              type: 1,
            },
            {
              name: "氨氮",
              value: 0.26,
              status: "正常",
              type: 0,
            },
            {
              name: "PH",
              value: 6.7,
              status: "正常",
              type: 1,
            },
            {
              name: "铅金属含量",
              value: 0.016,
              status: "正常",
              type: 0,
            },
            {
              name: "总流量",
              value: 0.31,
              status: "正常",
              type: 0,
            },
            {
              name: "设备电量",
              value: "94%",
              status: "正常",
              type: 0,
            },
            {
              name: "连接状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "故障状态",
              value: "/",
              status: "正常",
              type: 0,
            },
            {
              name: "污染状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "传输速率",
              value: "30min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "采集状态",
              value: "15min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "边缘计算模式",
              value: "二",
              status: "正常",
              type: 0,
            },
          ],
        },
        {
          id: "1-1",
          data1: [
            {
              name: "浊度",
              value: 8.6,
              status: "正常",
              type: 1,
            },
            {
              name: "TDS",
              value: 96.3,
              status: "正常",
              type: 1,
            },
            {
              name: "COD",
              value: 7.7,
              status: "正常",
              type: 1,
            },
            {
              name: "BOD",
              value: 22.6,
              status: "异常",
              type: 1,
            },
            {
              name: "氨氮",
              value: 0.35,
              status: "正常",
              type: 0,
            },
            {
              name: "PH",
              value: 5.8,
              status: "正常",
              type: 1,
            },
            {
              name: "铅金属含量",
              value: 0.029,
              status: "正常",
              type: 0,
            },
            {
              name: "总流量",
              value: 0.31,
              status: "正常",
              type: 0,
            },
            {
              name: "设备电量",
              value: "84%",
              status: "正常",
              type: 0,
            },
            {
              name: "连接状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "故障状态",
              value: "/",
              status: "正常",
              type: 0,
            },
            {
              name: "污染状态",
              value: '/',
              status: "可能污染",
              type: 0,
            },
            {
              name: "传输速率",
              value: "10min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "采集状态",
              value: "20min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "边缘计算模式",
              value: "一",
              status: "正常",
              type: 0,
            },
          ],
        },
        {
          id: "1-2",
          data1: [
            {
              name: "浊度",
              value: 9.4,
              status: "正常",
              type: 1,
            },
            {
              name: "TDS",
              value: 81.3,
              status: "正常",
              type: 1,
            },
            {
              name: "COD",
              value: 6.9,
              status: "正常",
              type: 1,
            },
            {
              name: "BOD",
              value: 15.6,
              status: "正常",
              type: 1,
            },
            {
              name: "氨氮",
              value: 0.26,
              status: "正常",
              type: 0,
            },
            {
              name: "PH",
              value: 6.9,
              status: "正常",
              type: 1,
            },
            {
              name: "铅金属含量",
              value: 0.019,
              status: "正常",
              type: 0,
            },
            {
              name: "总流量",
              value: 0.29,
              status: "正常",
              type: 0,
            },
            {
              name: "设备电量",
              value: "89%",
              status: "正常",
              type: 0,
            },
            {
              name: "连接状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "故障状态",
              value: "/",
              status: "正常",
              type: 0,
            },
            {
              name: "污染状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "传输速率",
              value: "35min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "采集状态",
              value: "15min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "边缘计算模式",
              value: "二",
              status: "正常",
              type: 0,
            },
          ],
        },
        {
          id: "1-3",
          data1: [
            {
              name: "浊度",
              value: 6.3,
              status: "正常",
              type: 1,
            },
            {
              name: "TDS",
              value: 106.3,
              status: "异常",
              type: 1,
            },
            {
              name: "COD",
              value: 8.9,
              status: "正常",
              type: 1,
            },
            {
              name: "BOD",
              value: 26.6,
              status: "异常",
              type: 1,
            },
            {
              name: "氨氮",
              value: 0.36,
              status: "正常",
              type: 0,
            },
            {
              name: "PH",
              value: 5.4,
              status: "异常",
              type: 1,
            },
            {
              name: "铅金属含量",
              value: 0.021,
              status: "正常",
              type: 0,
            },
            {
              name: "总流量",
              value: 0.21,
              status: "正常",
              type: 0,
            },
            {
              name: "设备电量",
              value: "76%",
              status: "正常",
              type: 0,
            },
            {
              name: "连接状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "故障状态",
              value: "/",
              status: "正常",
              type: 0,
            },
            {
              name: "污染状态",
              value: '/',
              status: "严重污染",
              type: 0,
            },
            {
              name: "传输速率",
              value: "10min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "采集状态",
              value: "60min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "边缘计算模式",
              value: "三",
              status: "正常",
              type: 0,
            },
          ],
        },
        {
          id: "2-0",
          data1: [
            {
              name: "浊度",
              value: 9.3,
              status: "正常",
              type: 1,
            },
            {
              name: "TDS",
              value: 86.9,
              status: "正常",
              type: 1,
            },
            {
              name: "COD",
              value: 6.9,
              status: "正常",
              type: 1,
            },
            {
              name: "BOD",
              value: 11.6,
              status: "正常",
              type: 1,
            },
            {
              name: "氨氮",
              value: 0.29,
              status: "正常",
              type: 0,
            },
            {
              name: "PH",
              value: 6.7,
              status: "正常",
              type: 1,
            },
            {
              name: "铅金属含量",
              value: 0.030,
              status: "正常",
              type: 0,
            },
            {
              name: "总流量",
              value: 0.32,
              status: "正常",
              type: 1,
            },
            {
              name: "设备电量",
              value: "94%",
              status: "正常",
              type: 0,
            },
            {
              name: "连接状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "故障状态",
              value: "/",
              status: "正常",
              type: 0,
            },
            {
              name: "污染状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "传输速率",
              value: "30min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "采集状态",
              value: "15min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "边缘计算模式",
              value: "一",
              status: "正常",
              type: 0,
            },
          ],
        },
        {
          id: "2-1",
          data1: [
            {
              name: "浊度",
              value: 9.4,
              status: "正常",
              type: 1,
            },
            {
              name: "TDS",
              value: 81.3,
              status: "正常",
              type: 1,
            },
            {
              name: "COD",
              value: 7.9,
              status: "正常",
              type: 1,
            },
            {
              name: "BOD",
              value: 15.6,
              status: "正常",
              type: 1,
            },
            {
              name: "氨氮",
              value: 0.26,
              status: "正常",
              type: 0,
            },
            {
              name: "PH",
              value: 7.1,
              status: "正常",
              type: 1,
            },
            {
              name: "铅金属含量",
              value: 0.011,
              status: "正常",
              type: 0,
            },
            {
              name: "总流量",
              value: 0.31,
              status: "正常",
              type: 0,
            },
            {
              name: "设备电量",
              value: "74%",
              status: "正常",
              type: 0,
            },
            {
              name: "连接状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "故障状态",
              value: "/",
              status: "正常",
              type: 0,
            },
            {
              name: "污染状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "传输速率",
              value: "20min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "采集状态",
              value: "15min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "边缘计算模式",
              value: "二",
              status: "正常",
              type: 0,
            },
          ],
        },
        {
          id: "2-2",
          data1: [
            {
              name: "浊度",
              value: 7.3,
              status: "正常",
              type: 1,
            },
            {
              name: "TDS",
              value: 86.3,
              status: "正常",
              type: 1,
            },
            {
              name: "COD",
              value: 8.9,
              status: "正常",
              type: 1,
            },
            {
              name: "BOD",
              value: 17.6,
              status: "正常",
              type: 1,
            },
            {
              name: "氨氮",
              value: 0.16,
              status: "正常",
              type: 0,
            },
            {
              name: "PH",
              value: 6.9,
              status: "正常",
              type: 1,
            },
            {
              name: "铅金属含量",
              value: 0.016,
              status: "正常",
              type: 0,
            },
            {
              name: "总流量",
              value: 0.36,
              status: "正常",
              type: 0,
            },
            {
              name: "设备电量",
              value: "90%",
              status: "正常",
              type: 0,
            },
            {
              name: "连接状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "故障状态",
              value: "/",
              status: "正常",
              type: 0,
            },
            {
              name: "污染状态",
              value: '/',
              status: "正常",
              type: 0,
            },
            {
              name: "传输速率",
              value: "10min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "采集状态",
              value: "10min/次",
              status: "正常",
              type: 0,
            },
            {
              name: "边缘计算模式",
              value: "三",
              status: "正常",
              type: 0,
            },
          ],
        },
      ],
      activeDevice: {},

      // 城市

      cities: [
        {
          name: "荔湾区",
          id: "0",
          // 水质综合等级
          level: 3,
          // 已接
          deviceCount1: 113,
          deviceCount2: 3,
          deviceCount3: 2,
          // 已处理
          processedCount: 16,
          untreatedCount: 4,

          // 耗电量
          power: [0.56,0.35,0.68,0.72,1.01],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "15",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "30",
            },
            {
              name: "多宝街道",
              value: "25",
            },
            {
              name: "南源街道",
              value: "18",
            },
            {
              name: "冲口街道",
              value: "23",
            },
            {
              name: "海龙街道",
              value: "15",
            },

          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [83.1,74.2,63.7],
          cob: [6.5,7.2,7.6],
          bod: [10.6,11.8,15.6],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "越秀区",
          id: "1",
          level: 4,

          deviceCount1: 130,
          deviceCount2: 2,
          deviceCount3: 6,
          // 已处理
          processedCount: 8,
          untreatedCount: 3,

          // 耗电量
          power: [0.51,0.45,0.68,0.73,0.83],
          // 街道
          streets: [
            {
              name: "洪桥街道",
              value: "28",
            },
            {
              name: "人民街道",
              value: "76",
            },
            {
              name: "流花街道",
              value: "82",
            },
            {
              name: "六榕街道",
              value: "68",
            },
            {
              name: "大塘街道",
              value: "74",
            },
            {
              name: "农林街道",
              value: "85",
            },
          ],
          // bottom表格
          tem: [25.3, 26.0, 26.4],
          tds: [83.1,84.2,63.7],
          cob: [6.7,7.2,7.6],
          bod: [10.6,11.8,15.6],
          total: [0.41, 0.48, 0.42],
        },
        {
          name: "海珠区",
          id: "2",
          level: 2,
          // 已接
          deviceCount1: 95,
          deviceCount2: 4,
          deviceCount3: 2,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [0.51,0.65,0.88,0.73,0.88],
          // 街道
          streets: [
            {
              name: "江海街道",
              value: "41",
            },
            {
              name: "新港街道",
              value: "23",
            },
            {
              name: "官洲街道",
              value: "32",
            },
            {
              name: "赤岗街道",
              value: "11",
            },
            {
              name: "江海街道",
              value: "15",
            },
          ],
          // 近三天的预报
          tem: [25.3, 26.0, 26.4],
          tds: [82.1,94.2,81.7],
          cob: [6.7,7.2,7.6],
          bod: [11.6,11.2,15.6],
          total: [0.41, 0.48, 0.42],
        },
        {
          name: "天河区",
          id: "3",
          level: 2,
          // 已接
          deviceCount1: 85,
          deviceCount2: 6,
          deviceCount3: 3,
          // 已处理
          processedCount: 16,
          untreatedCount: 5,

          // 耗电量
          power: [0.62,0.65,0.88,1.06,0.81],

          // 街道
          streets: [
            {
              name: "五山街道",
              value: "16",
            },
            {
              name: "车陂街道",
              value: "54",
            },
            {
              name: "石牌街道",
              value: "32",
            },
            {
              name: "长兴街道",
              value: "14",
            },
          ],
          // 近三天的预报
          tem: [25.3, 26.0, 26.4],
          tds: [80.1,84.2,81.7],
          cob: [6.7,7.2,7.6],
          bod: [11.6,10.2,15.6],
          total: [0.41, 0.48, 0.42],
        },
        {
          name: "白云区",
          id: "4",
          level: 3,
          // 已接
          deviceCount1: 86,
          deviceCount2: 2,
          deviceCount3: 2,
          // 已处理
          processedCount: 18,
          untreatedCount: 3,

          // 耗电量
          power: [0.32,0.65,0.98,1.06,0.71],

          // 街道
          streets: [
            {
              name: "三元里街道",
              value: "24",
            },
            {
              name: "松洲街道",
              value: "23",
            },
            {
              name: "景泰街道",
              value: "12",
            },
            {
              name: "黄石街道",
              value: "42",
            },
          ],
          // 近三天的预报
          tem: [25.3, 26.0, 26.4],
          tds: [70.1,74.2,71.7],
          cob: [6.9,7.2,7.6],
          bod: [11.6,10.2,15.6],
          total: [0.41, 0.48, 0.42],
        },
        {
          name: "黄浦区",
          id: "5",
          level: 3,
          // 已接
          deviceCount1: 93,
          deviceCount2: 0,
          deviceCount3: 1,
          // 已处理
          processedCount: 14,
          untreatedCount: 2,

          // 耗电量
          power: [0.32,0.45,0.88,1.16,0.84],

          // 街道
          streets: [
            {
              name: "红山街道",
              value: "20",
            },
            {
              name: "鱼珠街道",
              value: "24",
            },
            {
              name: "大沙街道",
              value: "16",
            },
            {
              name: "南岗街道",
              value: "18",
            },
          ],
          // 近三天的预报
          tem: [25.3, 26.0, 26.4],
          tds: [82.1,94.2,81.7],
          cob: [6.7,7.2,7.6],
          bod: [11.6,11.2,15.6],
          total: [0.42, 0.48, 0.42],
        },
        {
          name: "番禺区",
          id: "6",
          level: 3,
          // 已接
          deviceCount1: 106,
          deviceCount2: 3,
          deviceCount3: 2,
          // 已处理
          processedCount: 11,
          untreatedCount: 2,

          // 耗电量
          power: [0.42,0.82,0.88,1.06,0.68],

          // 街道
          streets: [
            {
              name: "东环街道",
              value: "15",
            },
            {
              name: "市桥街道",
              value: "29",
            },
            {
              name: "桥南街道",
              value: "32",
            },
            {
              name: "小谷围街道",
              value: "17",
            },
          ],
          // 近三天的预报
          tem: [25.3, 26.0, 26.4],
          tds: [82.1,84.2,84.7],
          cob: [6.7,7.2,7.6],
          bod: [11.6,11.2,15.6],
          total: [0.32, 0.38, 0.42],
        },
        {
          name: "花都区",
          id: "7",
          level: 3,
          // 已接
          deviceCount1: 86,
          deviceCount2: 2,
          deviceCount3: 0,
          // 已处理
          processedCount: 20,
          untreatedCount: 1,

          // 耗电量
          power: [0.42,0.82,0.78,0.56,0.84],

          // 街道
          streets: [
            {
              name: "新华街道",
              value: "14",
            },
            {
              name: "花城街道",
              value: "32",
            },
            {
              name: "狮岭镇街道",
              value: "27",
            },
            {
              name: "花东街道",
              value: "19",
            },
          ],
          // 近三天的预报
          tem: [25.3, 26.0, 26.4],
          tds: [72.1,74.2,74.7],
          cob: [5.7,6.2,7.6],
          bod: [11.6,10.2,13.6],
          total: [0.32, 0.38, 0.42],
        },
        {
          name: "萝岗区",
          id: "8",
          level: 3,
          // 已接
          deviceCount1: 128,
          deviceCount2: 1,
          deviceCount3: 2,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [0.48,0.82,0.80,0.56,0.81],

          // 街道
          streets: [
            {
              name: "永和街道",
              value: "17",
            },
            {
              name: "夏港街道",
              value: "13",
            },
            {
              name: "东区街道",
              value: "12",
            },
          ],
          // 近三天的预报
          tem: [25.3, 26.0, 26.4],
          tds: [82.1,94.2,81.7],
          cob: [6.7,7.2,7.6],
          bod: [11.6,11.2,15.6],
          total: [0.42, 0.48, 0.42],
        },
        {
          name: "增城区",
          id: "9",
          level: 3,
          // 已接
          deviceCount1: 162,
          deviceCount2: 4,
          deviceCount3: 6,
          // 已处理
          processedCount: 14,
          untreatedCount: 5,

          // 耗电量
          power: [0.48,0.92,0.80,9.76,0.85],

          // 街道
          streets: [
            {
              name: "小楼镇",
              value: "20",
            },
            {
              name: "永宁街道",
              value: "33",
            },
            {
              name: "石滩镇",
              value: "16",
            },
            {
              name: "新塘镇",
              value: "10",
            },
          ],
          // 近三天的预报
          tem: [25.3, 26.0, 26.4],
          tds: [72.1,74.2,81.7],
          cob: [6.7,5.2,6.6],
          bod: [11.6,12.2,14.6],
          total: [0.42, 0.48, 0.42],
        },
        {
          name: "从化区",
          id: "10",
          level: 3,
          // 已接
          deviceCount1: 130,
          deviceCount2: 1,
          deviceCount3: 1,
          // 已处理
          processedCount: 16,
          untreatedCount: 0,

          // 耗电量
          power: [0.56,0.35,0.68,0.72,1.01],
          // 街道
          streets: [
            {
              name: "太平镇",
              value: "20",
            },
            {
              name: "鳌头镇",
              value: "23",
            },
            {
              name: "江浦街道",
              value: "15",
            },
            {
              name: "城郊街道",
              value: "12",
            },
          ],
          // 近三天的预报
          tem: [25.3, 26.0, 26.4],
          tds: [82.1,84.2,84.7],
          cob: [6.7,7.2,7.6],
          bod: [11.6,11.2,15.6],
          total: [0.32, 0.38, 0.42],
        },
      ],
      activeCity: {},
    };
  },
});
