import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Index = ({icon, title, subTitle, label, subLable}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.job}>{title}</Text>
      <View style={styles.content}>
        {icon}
        <View style={styles.descContent}>
          <Text style={styles.title}>{subTitle}</Text>
          {label && <Text style={styles.subTitle}>{label}</Text>}
          {subLable && <Text style={styles.subTitle}>{subLable}</Text>}
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  job: {
    color: '#05B1A1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  descContent: {
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    color: '#000000',
  },
  subTitle: {
    fontSize: 14,
    color: '#000000',
  },
  line: {
    borderWidth: 1,
    borderColor: '#797979',
    marginTop: 10,
  },
});
