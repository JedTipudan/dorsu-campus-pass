import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({ count, onScan, onReset }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Campus Gate Verification Log</Text>
    <View style={styles.counterDisplay}>
      <View>
        <Text style={styles.label}>Today's Gate Entries</Text>
        <Text style={styles.sublabel}>Tap the button to log a scan</Text>
      </View>
      <Text style={styles.value}>{count}</Text>
    </View>
    <View style={styles.btnRow}>
      <Pressable style={styles.btnPrimary} onPress={onScan}>
        <Text style={styles.btnText}>＋ Scan at Gate</Text>
      </Pressable>
      <Pressable style={styles.btnSecondary} onPress={onReset}>
        <Text style={styles.btnSecText}>Reset</Text>
      </Pressable>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
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
    gap: 14,
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  counterDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
  },
  sublabel: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
  },
  value: {
    fontSize: 42,
    fontWeight: '800',
    color: '#00758F',
  },
  btnRow: {
    flexDirection: 'row',
    gap: 10,
  },
  btnPrimary: {
    flex: 2,
    backgroundColor: '#00758F',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnSecondary: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  btnSecText: {
    color: '#475569',
    fontWeight: '700',
    fontSize: 14,
  },
});
