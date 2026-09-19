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
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1.5,
  },
  active: { backgroundColor: '#F0FDF4', borderColor: '#86EFAC' },
  suspended: { backgroundColor: '#FFF1F2', borderColor: '#FCA5A5' },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotActive: { backgroundColor: '#16A34A' },
  dotSuspended: { backgroundColor: '#DC2626' },
  text: { fontSize: 11, fontWeight: '800', letterSpacing: 0.8 },
  textActive: { color: '#15803D' },
  textSuspended: { color: '#DC2626' },
});
