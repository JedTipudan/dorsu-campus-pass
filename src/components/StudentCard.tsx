import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, isActive }) => (
  <View style={styles.card}>
    <View style={styles.topRow}>
      <Image source={{ uri: student.avatarUrl }} style={styles.avatar} />
      <View style={styles.details}>
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.idNumber}>{student.idNumber}</Text>
        <Text style={styles.program}>{student.program}</Text>
        <Text style={styles.yearLevel}>{student.yearLevel}</Text>
      </View>
    </View>
    <View style={styles.divider} />
    <StatusBadge isActive={isActive} />
    <View style={styles.campusRow}>
      <Text style={styles.campusLabel}>📍 Campus</Text>
      <Text style={styles.campusValue}>{student.campus}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#00758F',
  },
  details: {
    flex: 1,
    gap: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  idNumber: {
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: '700',
    color: '#00758F',
  },
  program: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '500',
  },
  yearLevel: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: 14,
  },
  campusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
  },
  campusLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '700',
  },
  campusValue: {
    fontSize: 12,
    color: '#64748B',
  },
});
