import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Simple Bar Chart Component
const SimpleBarChart = ({ data, color, height = 150, showValues = true }: any) => {
    const maxValue = Math.max(...data.map((d: any) => d.value));

    return (
        <View style={[styles.chartContainer, { height }]}>
            <View style={styles.chartAxis}>
                {/* Simple Y-Axis labels could go here, but omitted for cleaner look per design */}
            </View>
            <View style={styles.barsContainer}>
                {data.map((item: any, index: number) => (
                    <View key={index} style={styles.barColumn}>
                        {/* Value Label (only for specific items if needed, showing none or all?) 
                Design shows no values on top, just bars. 
            */}
                        <View style={styles.barBackground}>
                            <View
                                style={[
                                    styles.barFill,
                                    {
                                        height: `${(item.value / maxValue) * 100}%`,
                                        backgroundColor: color
                                    }
                                ]}
                            />
                        </View>
                        <Text style={styles.barLabel}>{item.label}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default function SubDrawer4() {
    const router = useRouter();

    const goalsData = [
        { label: 'Nov 24', value: 5 },
        { label: 'Nov 25', value: 4 },
        { label: 'Nov 26', value: 2 },
        { label: 'Nov 27', value: 2 },
        { label: 'Nov 28', value: 4 },
        { label: 'Nov 29', value: 4 },
        { label: 'Nov 30', value: 3 },
    ];

    const pointsData = [
        { label: 'Nov 24', value: 270 },
        { label: 'Nov 25', value: 240 },
        { label: 'Nov 26', value: 140 },
        { label: 'Nov 27', value: 140 },
        { label: 'Nov 28', value: 220 },
        { label: 'Nov 29', value: 240 },
        { label: 'Nov 30', value: 200 },
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Weekly Progress</Text>
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.headerAction}>
                        <MaterialCommunityIcons name="chart-timeline-variant" size={24} color="#008080" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headerAction}>
                        <View style={styles.profileCircle}>
                            <Ionicons name="person" size={16} color="#FFF" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* 7-Day Progress Overview */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionHeaderTitle}>7-DAY PROGRESS OVERVIEW</Text>
                    <View style={styles.datePill}>
                        <Text style={styles.datePillText}>Nov 24 - Nov 30</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    {/* Goals Completed Chart */}
                    <View style={styles.chartSection}>
                        <View style={styles.chartTitleRow}>
                            <Ionicons name="checkmark-circle" size={18} color="#4285F4" />
                            <Text style={styles.chartTitle}>Goals Completed</Text>
                        </View>
                        <SimpleBarChart data={goalsData} color="#4285F4" />
                    </View>

                    <View style={styles.divider} />

                    {/* Points Earned Chart */}
                    <View style={styles.chartSection}>
                        <View style={styles.chartTitleRow}>
                            <Ionicons name="disc" size={18} color="#00C853" />
                            <Text style={styles.chartTitle}>Points Earned</Text>
                        </View>
                        <SimpleBarChart data={pointsData} color="#00C853" />
                    </View>
                </View>

                {/* Weekly Summary */}
                <Text style={styles.sectionHeaderTitle}>WEEKLY SUMMARY</Text>

                <View style={styles.summaryGrid}>
                    {/* Total Goals */}
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryLabel}>Total Goals</Text>
                        <Text style={styles.summaryValue}>24</Text>
                        <View style={styles.trendBadge}>
                            <MaterialCommunityIcons name="trending-up" size={14} color="#00C853" />
                            <Text style={styles.trendText}>3.4 avg/day</Text>
                        </View>
                    </View>

                    {/* Total Points */}
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryLabel}>Total Points</Text>
                        <Text style={styles.summaryValue}>1,450</Text>
                        <View style={styles.trendBadge}>
                            <MaterialCommunityIcons name="trending-up" size={14} color="#00C853" />
                            <Text style={styles.trendText}>207 avg/day</Text>
                        </View>
                    </View>

                    {/* Avg Daily Goals */}
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryLabel}>Avg Daily Goals</Text>
                        <View style={styles.valueRow}>
                            <Text style={styles.summaryValue}>3.4</Text>
                            <Text style={styles.summarySubValue}>/5</Text>
                        </View>
                        <View style={styles.miniProgressBarBg}>
                            <View style={[styles.miniProgressBarFill, { width: '68%', backgroundColor: '#FF9800' }]} />
                        </View>
                    </View>

                    {/* Best Day */}
                    <View style={styles.summaryCard}>
                        <Text style={styles.summaryLabel}>Best Day</Text>
                        <Text style={styles.summaryValue}>Nov 24</Text>
                        <View style={[styles.trendBadge, { backgroundColor: '#E0F2F1' }]}>
                            <MaterialCommunityIcons name="trophy" size={12} color="#008080" />
                            <Text style={[styles.trendText, { color: '#008080' }]}>270 pts</Text>
                        </View>
                    </View>
                </View>

                {/* Weekly Summary Information */}
                <View style={styles.infoCard}>
                    <View style={styles.infoHeaderRow}>
                        <Ionicons name="information-circle" size={20} color="#00838F" />
                        <Text style={styles.infoHeaderText}>Weekly Summary Information</Text>
                    </View>

                    <View style={styles.bulletItem}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>
                            <Text style={styles.boldText}>Total Goals:</Text> Sum of all goals completed across the 7-day period.
                        </Text>
                    </View>
                    <View style={styles.bulletItem}>
                        <Text style={[styles.bulletDot, { color: '#00C853' }]}>•</Text>
                        <Text style={styles.bulletText}>
                            <Text style={styles.boldText}>Total Points:</Text> Cumulative points earned from all completed goals over the week.
                        </Text>
                    </View>
                    <View style={styles.bulletItem}>
                        <Text style={[styles.bulletDot, { color: '#FF9800' }]}>•</Text>
                        <Text style={styles.bulletText}>
                            <Text style={styles.boldText}>Avg Daily Goals:</Text> Average number of goals completed per day (out of 5 possible).
                        </Text>
                    </View>
                    <View style={styles.bulletItem}>
                        <Text style={[styles.bulletDot, { color: '#00838F' }]}>•</Text>
                        <Text style={styles.bulletText}>
                            <Text style={styles.boldText}>Best Day:</Text> The day with the highest points earned, showing your peak performance.
                        </Text>
                    </View>

                    {/* Tip Box */}
                    <View style={styles.tipBox}>
                        <FontAwesome5 name="lightbulb" size={16} color="#FBC02D" style={styles.tipIcon} />
                        <Text style={styles.tipText}>
                            <Text style={styles.boldTealText}>Tip:</Text> Aim to maintain consistent daily goal completion to improve your weekly average and unlock more achievements!
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EFF5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
    },
    backButton: {
        padding: 4,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerAction: {
        marginLeft: 15,
    },
    profileCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#C8A67B', // Placeholder avatar color
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    sectionHeaderTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#888',
        letterSpacing: 0.5,
    },
    datePill: {
        backgroundColor: '#E0F2F1',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    datePillText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#00695C',
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    chartSection: {
        marginBottom: 0,
    },
    chartTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 8,
    },
    chartTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    chartContainer: {
        width: '100%',
        justifyContent: 'flex-end',
    },
    chartAxis: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        width: 20,
    },
    barsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '100%',
        marginLeft: 10, // approximate y-axis spacing if needed
    },
    barColumn: {
        alignItems: 'center',
        flex: 1,
    },
    barBackground: {
        height: 100, // Fixed height for visual consistency
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 6,
    },
    barFill: {
        width: 8, // Bar thickness
        borderRadius: 4,
    },
    barLabel: {
        fontSize: 9,
        color: '#999',
    },
    divider: {
        height: 1,
        backgroundColor: '#EEE',
        marginVertical: 20,
    },
    summaryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    summaryCard: {
        width: '48%',
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
    },
    summaryLabel: {
        fontSize: 11,
        color: '#777',
        marginBottom: 4,
    },
    summaryValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 8,
    },
    summarySubValue: {
        fontSize: 14,
        color: '#777',
        fontWeight: 'normal',
        marginLeft: 2,
        marginBottom: 4,
    },
    valueRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 8,
    },
    trendBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8F5E9',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        gap: 4,
    },
    trendText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#00C853',
    },
    miniProgressBarBg: {
        height: 4,
        backgroundColor: '#EEE',
        borderRadius: 2,
        width: '100%',
    },
    miniProgressBarFill: {
        height: '100%',
        borderRadius: 2,
    },
    infoCard: {
        backgroundColor: '#FFF', // Or very light grey
        borderRadius: 20,
        padding: 20,
    },
    infoHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 8,
    },
    infoHeaderText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
    },
    bulletItem: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingRight: 10,
    },
    bulletDot: {
        fontSize: 18,
        color: '#4285F4',
        marginRight: 8,
        lineHeight: 18,
    },
    bulletText: {
        fontSize: 12,
        color: '#555',
        lineHeight: 18,
        flex: 1,
    },
    boldText: {
        fontWeight: 'bold',
        color: '#333',
    },
    tipBox: {
        marginTop: 10,
        backgroundColor: '#E0F2F1', // Light Teal/Blueish
        borderRadius: 12,
        padding: 14,
        flexDirection: 'row',
    },
    tipIcon: {
        marginRight: 10,
        marginTop: 2,
    },
    tipText: {
        fontSize: 11,
        color: '#455A64',
        lineHeight: 16,
        flex: 1,
    },
    boldTealText: {
        fontWeight: 'bold',
        color: '#00838F',
    },
});
