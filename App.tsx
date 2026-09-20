import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { ScanCounter } from './src/components/ScanCounter';
import { StudentCard } from './src/components/StudentCard';
import { StudentProfile } from './src/types/student';

const initialStudent: StudentProfile = {
  name: 'Jed E. Tipudan',
  idNumber: '2019-2711',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section C',
  avatarUrl: 'https://i.ibb.co/DDRLPqX9/1000014951-Photoroom.png',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

const peerStudent: StudentProfile = {
  name: 'Peejay Parucho',
  idNumber: '2024-2733',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3nd Year — Section C',
  avatarUrl: 'https://i.ibb.co/Q1vJpZt/122535511-110551097514294-307804650318904506-n.jpg',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [gateScans, setGateScans] = useState<number>(3);
  const [showPeer, setShowPeer] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
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
            {isActive ? '⚠️  Simulate Pass Suspension' : '✅  Reactivate Student Pass'}
          </Text>
        </Pressable>

        <Pressable style={styles.peerBtn} onPress={() => setShowPeer(prev => !prev)}>
          <Text style={styles.peerBtnText}>
            {showPeer ? 'Hide Peer Demo' : 'Show Peer Component Demo'}
          </Text>
        </Pressable>

        {showPeer && (
          <View style={styles.peerSection}>
            <Text style={styles.peerLabel}>PEER PROPS DEMO</Text>
            <StudentCard student={peerStudent} isActive={true} />
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.footerText}>DOrSU Digital Campus Pass • ITMSD 1</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  container: {
    padding: 16,
    gap: 14,
    paddingBottom: 32,
  },
  toggleBtn: {
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  suspendBtn: {
    backgroundColor: '#FFF1F2',
    borderColor: '#FCA5A5',
  },
  activateBtn: {
    backgroundColor: '#F0FDF4',
    borderColor: '#86EFAC',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  suspendText: {
    color: '#DC2626',
  },
  activateText: {
    color: '#16A34A',
  },
  peerBtn: {
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  peerBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#00758F',
  },
  peerSection: {
    gap: 8,
  },
  peerLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#00758F',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  footer: {
    alignItems: 'center',
    paddingTop: 8,
  },
  footerText: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '500',
  },
});
