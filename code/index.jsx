'use strict';
import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text, Input, Button, RadioGroup, DatePicker } from '@tarojs/components';
import { RouteUtils } from '@/src/utils/route-utils';

import './index.less';
const print = function(value) {
  console.log(value);
};
class Index extends Component {
  render() {
    return (
      <View className="page">
        <View className="long-banner-wrapper">
          <Image
            className="long-banner"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/94c37590281311ec957a13ebef7c3eed.png"
          />
        </View>
        <View className="group">
          <Image
            className="picture"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/94ff6d20281311ecab360d21d0e524b2.png"
          />
        </View>
        <View className="group-i0">
          <Image
            className="icon-mine"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/95b6d640281311ec9d962727f0cfbd76.png"
          />
          <Text className="tag">请输入账号</Text>
        </View>
        <View className="group-1">
          <View className="divider-wrapper">
            <Image
              className="divider"
              src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/95496e70281311ecabe86dc0e796f79c.png"
            />
          </View>
        </View>
        <View className="group-i1">
          <Image
            className="icon-key"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/95e5ae70281311ecbc6dc38184933ff1.png"
          />
          <Input placeholder={'请输入密码'} />
          <Button size={'small'} type={'primary'} htmlType={'submit'} id={'dd'}>
            你好
          </Button>
          <RadioGroup
            dataSource={[
              { label: '男', value: 'male' },
              { label: '女', value: 'female' }
            ]}
          />
          <DatePicker
            formItemProps={{ label: '日期选择框', showLabel: true, name: 'datePicker' }}
            format={'YYYY-MM-DD'}
            showTime={true}
            disabledDateType={'noHasAfter'}
          />
        </View>
        <View className="group-2">
          <View className="divider-wrapper-1">
            <Image
              className="divider-1"
              src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/958713b0281311ec921d3d9daadbada1.png"
            />
          </View>
        </View>
        <View className="title-wrapper">
          <Text className="title">登录</Text>
        </View>
        <View className="group-3">
          <Text className="word">忘记密码？</Text>
          <Text className="tag-1">新用户注册</Text>
        </View>
        <View className="group-4">
          <View className="primary">
            <Image
              className="text-background"
              src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/961f3500281311ec957a13ebef7c3eed.png"
            />
            <Text className="info">其他登陆方式</Text>
          </View>
          <View className="side">
            <Image
              className="bg"
              src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/964de620281311ec921d3d9daadbada1.png"
            />
          </View>
        </View>
        <View className="group-5">
          <Image
            className="large-icon"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/96ade070281311ecabe86dc0e796f79c.png"
          />
          <Image
            className="large-icon-1"
            src="https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/967480f0281311ec8dc977d7cdf4ec37.png"
          />
        </View>
      </View>
    );
  }
}
export default Index;
