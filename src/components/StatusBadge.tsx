import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ isActive }) => (
  <View style={[styles.badge, isActive ? styles.active : styles.suspended]}>
    <View style={[styles.dot, isActive ? styles.dotActive : styles.dotSuspended]} />
    <Text style={[styles.text, isActive ? styles.textActive : styles.textSuspended]}>
      {isActive ? 'STATUS: VERIFIED ACTIVE PASS' : 'STATUS: ACCESS TEMPORARILY SUSPENDED'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    padding: 6,
    borderRadius: 6,
    marginVertical: 8,
    borderWidth: 1,
  },
  active: { backgroundColor: '#DCFCE7', borderColor: '#86EFAC' },
  suspended: { backgroundColor: '#FEE2E2', borderColor: '#FCA5A5' },
  dot: { width: 6, height: 6, borderRadius: 3 },
  dotActive: { backgroundColor: '#16A34A' },
  dotSuspended: { backgroundColor: '#DC2626' },
  text: { fontSize: 9, fontWeight: '800', letterSpacing: 0.5 },
  textActive: { color: '#166534' },
  textSuspended: { color: '#991B1B' },
});
