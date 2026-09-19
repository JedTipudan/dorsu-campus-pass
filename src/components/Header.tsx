import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header: React.FC = () => (
  <View style={styles.header}>
    <Text style={styles.title}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
    <Text style={styles.sub}>FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY</Text>
    <View style={styles.badgeWrapper}>
      <Text style={styles.badge}>OFFICIAL STUDENT DIGITAL PASS • AY 2026–2027</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00758F',
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#F29111',
    shadowColor: '#00758F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1,
    textAlign: 'center',
  },
  sub: {
    color: '#E0F2FE',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  badgeWrapper: {
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.25)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badge: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
