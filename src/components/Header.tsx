import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header: React.FC = () => (
  <View style={styles.header}>
    <Text style={styles.title}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
    <Text style={styles.sub}>FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY</Text>
    <Text style={styles.badge}>OFFICIAL STUDENT DIGITAL PASS • AY 2026–2027</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00758F',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#F29111',
  },
  title: { color: '#fff', fontSize: 13, fontWeight: '800', letterSpacing: 0.6, textAlign: 'center' },
  sub: { color: '#fff', fontSize: 10, fontWeight: '600', opacity: 0.9, marginTop: 2, textAlign: 'center' },
  badge: {
    color: '#fff',
    fontSize: 9,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 4,
  },
});
