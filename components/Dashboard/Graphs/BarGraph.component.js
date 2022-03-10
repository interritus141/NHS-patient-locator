import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const BarGraph = ({ data }) => {

  const config = {
    data,
    width: 490,
    height: 162,
    xField: 'room',
    yField: 'visits',
    legend: {
      title: "Most visited rooms",
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return <Column {...config} />;

};

export default BarGraph;