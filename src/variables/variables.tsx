import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Section} from '../components/Section';
import TypeDemonstrations from './variablesPractical';

const Variables = () => {
  return (
    <View>
      <Text style={styles.subHeader}>Basic types</Text>
      <Section title="Boolean">let isCompleted: boolean = true</Section>
      <Section title="Number">
        {'let decimal: number = 6;\n'}
        {'let hex: number = 0xf00d;\n'}
        {'let binary: number = 0b1010;\n'}
        {'let octal: number = 0o744;\n'}
        {'let big: bigint = 100n;\n'}
      </Section>
      <Section title="String">
        {'let color: string = "blue";\n'}
        {'color = "red";\n'}
      </Section>
      <Section title="Array">
        {'let fruits: string[] = ["apple", "mango", "banana"];\n'}
        {'let fruits: Array<string> = ["apple", "mango", "banana"];\n'}
      </Section>
      <Section title="Any">
        {'let x: any = "123"; //string declaration\n'}
        {'x = 123; //number declaration\n'}
      </Section>
      <TypeDemonstrations />
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
  },
});
