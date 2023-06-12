import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      // 路由相关
      page: "1",
      clientWidth2: 0,
      // 当前的设备
      activeDeviceCode: 1,

      // 设备数量

      // 城市

      cities: [
        {
          name: "荔湾区",
          id: "0",
          // 水质综合等级
          level: 3,
          // 已接
          deviceCount1: 100,
          deviceCount2: 53,
          deviceCount3: 62,
          // 已处理
          processedCount: 10,
          untreatedCount: 5,

          // 耗电量
          power: [100, 150, 300, 100, 50],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "越秀区",
          id: "1",
          level: 4,

          deviceCount1: 100,
          deviceCount2: 53,
          deviceCount3: 62,
          // 已处理
          processedCount: 10,
          untreatedCount: 5,

          // 耗电量
          power: [100, 150, 300, 100, 50],
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
          tem: [29.3, 29.7, 30.0],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "海珠区",
          id: "2",
          level: 2,
          // 已接
          deviceCount1: 95,
          deviceCount2: 48,
          deviceCount3: 62,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [100, 145, 320, 176, 57],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "天河区",
          id: "3",
          level: 2,
          // 已接
          deviceCount1: 95,
          deviceCount2: 48,
          deviceCount3: 62,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [100, 145, 320, 176, 57],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "白云区",
          id: "4",
          level: 3,
          // 已接
          deviceCount1: 95,
          deviceCount2: 48,
          deviceCount3: 62,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [100, 145, 320, 176, 57],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "黄浦区",
          id: "5",
          level: 3,
          // 已接
          deviceCount1: 95,
          deviceCount2: 48,
          deviceCount3: 62,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [100, 145, 320, 176, 57],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "番禺区",
          id: "6",
          level: 3,
          // 已接
          deviceCount1: 95,
          deviceCount2: 48,
          deviceCount3: 62,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [100, 145, 320, 176, 57],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "花都区",
          id: "7",
          level: 3,
          // 已接
          deviceCount1: 95,
          deviceCount2: 48,
          deviceCount3: 62,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [100, 145, 320, 176, 57],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "萝岗区",
          id: "8",
          level: 3,
          // 已接
          deviceCount1: 95,
          deviceCount2: 48,
          deviceCount3: 62,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [100, 145, 320, 176, 57],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "增城区",
          id: "9",
          level: 3,
          // 已接
          deviceCount1: 95,
          deviceCount2: 48,
          deviceCount3: 62,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [100, 145, 320, 176, 57],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
        {
          name: "从化区",
          id: "10",
          level: 3,
          // 已接
          deviceCount1: 95,
          deviceCount2: 48,
          deviceCount3: 62,
          // 已处理
          processedCount: 13,
          untreatedCount: 5,

          // 耗电量
          power: [100, 145, 320, 176, 57],
          // 街道
          streets: [
            {
              name: "沙面街道",
              value: "40",
            },
            {
              name: "岭南街道",
              value: "23",
            },
            {
              name: "华林街道",
              value: "56",
            },
            {
              name: "多宝街道",
              value: "48",
            },
          ],
          // 近三天的预报
          tem: [29.3, 29.0, 29.4],
          tds: [1, 2, 3],
          cob: [1, 2, 3],
          bod: [1, 2, 3],
          total: [0.41, 0.42, 0.42],
        },
      ],
      activeCity: {},
    };
  },
});
