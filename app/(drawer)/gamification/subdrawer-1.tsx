import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SubDrawer1() {
  return (
    // <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor:"#E8EFF5"}} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="gamepad-variant" size={24} color="#008080" />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Health Gamification & Achievements</Text>
          </View>
        </View>
        
        <Text style={styles.description}>
          Complete daily health goals to earn points, badges, and achievements!
        </Text>

        {/* Employee Dropdown */}
        <View style={styles.dropdownSection}>
          <View style={styles.dropdownLabelRow}>
            <Ionicons name="person" size={14} color="#666" />
            <Text style={styles.dropdownLabel}>SELECT EMPLOYEE</Text>
            <Ionicons name="help-circle-outline" size={16} color="#999" style={styles.helpIcon} />
          </View>
          
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>CREW-0001</Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Metrics Summary */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionIconContainer}>
            <MaterialCommunityIcons name="chart-bar" size={20} color="#008080" />
          </View>
          <Text style={styles.sectionTitle}>Metrics Summary</Text>
        </View>

        <View style={styles.metricsCard}>
          <View style={styles.metricsHeaderRow}>
            <Text style={styles.metricsHeaderLabel}>METRIC</Text>
            <Text style={styles.metricsHeaderLabel}>VALUE</Text>
          </View>
          
          <View style={styles.divider} />

          <View style={styles.metricRow}>
            <Text style={styles.metricName}>Heart Rate</Text>
            <Text style={styles.metricValue}>92 bpm</Text>
          </View>
          <View style={styles.dividerLight} />
          
          <View style={styles.metricRow}>
            <Text style={styles.metricName}>Steps</Text>
            <Text style={styles.metricValue}>9,822</Text>
          </View>
           <View style={styles.dividerLight} />

          <View style={styles.metricRow}>
            <Text style={styles.metricName}>Sleep Hours</Text>
            <Text style={styles.metricValue}>7.7 hrs</Text>
          </View>
           <View style={styles.dividerLight} />

          <View style={styles.metricRow}>
            <Text style={styles.metricName}>Work Hours</Text>
            <Text style={styles.metricValue}>2.5 hrs</Text>
          </View>
        </View>

        {/* Bottom Stats Cards */}
        <View style={styles.statsContainer}>
          {/* Total Points */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>TOTAL POINTS</Text>
            <Text style={styles.statValue}>200</Text>
            <View style={styles.statTrend}>
              <MaterialCommunityIcons name="trending-up" size={16} color="#00A896" />
              <Text style={styles.statTrendText}>+270 possible</Text>
            </View>
          </View>

          {/* Goals Done */}
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>GOALS DONE</Text>
            <View style={styles.goalsRow}>
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statSubValue}>/5</Text>
            </View>
            <View style={styles.statTrend}>
              <MaterialCommunityIcons name="arrow-up" size={16} color="#00A896" />
              <Text style={styles.statTrendText}>74.1%</Text>
            </View>
          </View>

          {/* Health Warrior */}
          <View style={[styles.statCard, styles.warriorCard]}>
            <View style={styles.warriorIconCircle}>
              <MaterialCommunityIcons name="sword-cross" size={24} color="#FFF" />
            </View>
            <Text style={styles.warriorText}>Health</Text>
            <Text style={styles.warriorText}>Warrior</Text>
          </View>
        </View>

      </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EFF5', // Light blue-ish grey background
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    lineHeight: 28,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 24,
    lineHeight: 20,
  },
  dropdownSection: {
    marginBottom: 24,
  },
  dropdownLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dropdownLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    marginLeft: 6,
    letterSpacing: 0.5,
  },
  helpIcon: {
    marginLeft: 'auto',
  },
  dropdown: {
    backgroundColor: '#FFF',
    borderRadius: 12, // Rounded corners for dropdown
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#D0E8E6', // Light teal bg
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  metricsCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  metricsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  metricsHeaderLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE',
    marginBottom: 12,
  },
  dividerLight: {
    height: 1,
    backgroundColor: '#F5F5F5',
    marginVertical: 12,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricName: {
    fontSize: 15,
    color: '#555',
  },
  metricValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFF', // Or slight off-white #F8FAFC if needing contrast
    borderRadius: 20,
    padding: 16,
    width: '31%', // roughly 1/3
    minHeight: 120,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  warriorCard: {
    backgroundColor: '#FDEFE7', // Light orange background
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#888',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },
  statSubValue: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
    marginBottom: 8, // align baseline roughly
  },
  goalsRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  statTrend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statTrendText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#00A896', // Teal color
    marginLeft: 2,
  },
  warriorIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F58025', // Orange
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  warriorText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5D4037', // Brownish text
    lineHeight: 18,
  },
});
