import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Header } from '../components/Header';
import { ScanCounter } from '../components/ScanCounter';
import { StudentCard } from '../components/StudentCard';
import { StudentProfile } from '../types/student';

const initialStudent: StudentProfile = {
  name: 'Jed E. Tipudan',
  idNumber: '2019-2711',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section C',
  avatarUrl: 'https://i.ibb.co/DDRLPqX9/1000014951-Photoroom.png',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [gateScans, setGateScans] = useState<number>(3);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <StudentCard student={initialStudent} isActive={isActive} />
        <ScanCounter
          count={gateScans}
          onScan={() => setGateScans(prev => prev + 1)}
          onReset={() => setGateScans(0)}
        />
        <Pressable
          style={[styles.toggleBtn, isActive ? styles.suspendBtn : styles.activateBtn]}
          onPress={() => setIsActive(prev => !prev)}
        >
          <Text style={[styles.toggleText, isActive ? styles.suspendText : styles.activateText]}>
            {isActive ? '⚠️ Simulate Pass Suspension' : '✅ Reactivate Student Pass'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC' },
  container: { padding: 16, gap: 16 },
  toggleBtn: { padding: 12, borderRadius: 8, alignItems: 'center', borderWidth: 1 },
  suspendBtn: { backgroundColor: '#FEE2E2', borderColor: '#FCA5A5' },
  activateBtn: { backgroundColor: '#DCFCE7', borderColor: '#86EFAC' },
  toggleText: { fontSize: 13, fontWeight: '800' },
  suspendText: { color: '#991B1B' },
  activateText: { color: '#166534' },
});
