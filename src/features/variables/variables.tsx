import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Section} from '../../components/Section';
import TypeDemonstrations from './variablesPractical';
import SectionsList, { Item } from '../../components/SectionsList';

const Variables: React.FC = () => {
  const sectionData: Array<Item> = [
    {
      title: 'Boolean',
      content: `let isCompleted: boolean = true`
    },
    {
      title: 'Number',
      content: `let decimal: number = 6;
      let hex: number = 0xf00d;
      let binary: number = 0b1010;
      let octal: number = 0o744;
      let big: bigint = 100n;`
    },
    {
      title: 'String',
      content: `let color: string = "blue";
      'color = "red";`
    },
    {
      title: 'Array',
      content: `let fruits: string[] = ["apple", "mango", "banana"];
      let fruits: Array<string> = ["apple", "mango", "banana"];`
    },
    {
      title: 'Any',
      content: `let x: any = "123"; //string declaration
      x = 123; //number declaration`
    },
  ]
  return (
    <View style={{flex: 1}}>
      <SectionsList data={sectionData} title={'Basic types'} Footer={TypeDemonstrations} />
    </View>
  );
};

export default Variables;

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontWeight: '700',
    alignSelf: 'center',
  },
  subHeader: {
    fontSize: 32,
    fontWeight: '700',
    marginLeft: 24,
    marginTop: 20,
    color: "#000"
  },
});
