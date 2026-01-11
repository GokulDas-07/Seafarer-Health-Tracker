import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Helper component for the Stepper Input
const MetricStepper = ({ label, value, unit, onIncrement, onDecrement }: any) => (
    <View style={styles.metricContainer}>
        <View style={styles.metricLabelRow}>
            <Text style={styles.metricLabel}>{label}</Text>
            <Ionicons name="help-circle-outline" size={14} color="#999" />
        </View>
        <View style={styles.stepperContainer}>
            <Text style={styles.stepperValue}>{value} <Text style={styles.unitText}>{unit}</Text></Text>
            <View style={styles.stepperControls}>
                <TouchableOpacity onPress={onDecrement} style={styles.stepperButton}>
                    <Text style={styles.stepperButtonText}>−</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onIncrement} style={styles.stepperButton}>
                    <Text style={styles.stepperButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default function DigitalHealthCoach() {
    // State for metrics (using strings/numbers as appropriate for potential form logic)
    const [humidity, setHumidity] = useState(50.00);
    const [heartRate, setHeartRate] = useState(75.00);
    const [steps, setSteps] = useState(8000);
    const [temp, setTemp] = useState(25.00);
    const [workHours, setWorkHours] = useState(8.00);
    const [noise, setNoise] = useState(65.00);
    const [sleepHours, setSleepHours] = useState(7.00);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

            {/* Page Header */}
            <View style={styles.header}>
                {/* <View style={styles.headerIconBox}>
                    <MaterialCommunityIcons name="medical-bag" size={28} color="#FFF" />
                </View>
                <View style={styles.headerTextBox}>
                    <Text style={styles.headerTitle}>Digital Health Coach</Text>
                </View> */}
            </View>

            <Text style={styles.headerDescription}>
                An AI-powered Digital Health Coach delivers personalized health recommendations derived from your individual health data and historical records.
            </Text>

            {/* Main Form Card */}
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <MaterialCommunityIcons name="pencil-box-outline" size={24} color="#FF9800" style={styles.cardIcon} />
                    <Text style={styles.cardTitle}>Enter Daily Health Metrics</Text>
                </View>

                <View style={styles.formGrid}>
                    {/* Employee ID - Full Width or Half based on design, design looks grid-like */}
                    <View style={styles.metricContainer}>
                        <View style={styles.metricLabelRow}>
                            <Text style={styles.metricLabel}>Employee ID</Text>
                            <Ionicons name="help-circle-outline" size={14} color="#999" />
                        </View>
                        <TouchableOpacity style={styles.dropdownInput}>
                            <Text style={styles.dropdownText}>CREW-0001</Text>
                            <Ionicons name="chevron-down" size={16} color="#666" />
                        </TouchableOpacity>
                    </View>

                    <MetricStepper
                        label="Avg Humidity (%)"
                        value={humidity.toFixed(2)}
                        onDecrement={() => setHumidity(prev => Math.max(0, prev - 1))}
                        onIncrement={() => setHumidity(prev => prev + 1)}
                    />

                    <MetricStepper
                        label="Heart Rate (bpm)"
                        value={heartRate.toFixed(2)}
                        onDecrement={() => setHeartRate(prev => Math.max(0, prev - 1))}
                        onIncrement={() => setHeartRate(prev => prev + 1)}
                    />

                    <MetricStepper
                        label="Total Steps"
                        value={steps.toString()}
                        onDecrement={() => setSteps(prev => Math.max(0, prev - 500))}
                        onIncrement={() => setSteps(prev => prev + 500)}
                    />

                    <MetricStepper
                        label="Avg Temp (°C)"
                        value={temp.toFixed(2)}
                        onDecrement={() => setTemp(prev => prev - 0.5)}
                        onIncrement={() => setTemp(prev => prev + 0.5)}
                    />

                    <MetricStepper
                        label="Work Hours"
                        value={workHours.toFixed(2)}
                        onDecrement={() => setWorkHours(prev => Math.max(0, prev - 0.5))}
                        onIncrement={() => setWorkHours(prev => prev + 0.5)}
                    />

                    <MetricStepper
                        label="Avg Noise (dBA)"
                        value={noise.toFixed(2)}
                        onDecrement={() => setNoise(prev => Math.max(0, prev - 1))}
                        onIncrement={() => setNoise(prev => prev + 1)}
                    />

                    <MetricStepper
                        label="Sleep Hours"
                        value={sleepHours.toFixed(2)}
                        onDecrement={() => setSleepHours(prev => Math.max(0, prev - 0.5))}
                        onIncrement={() => setSleepHours(prev => prev + 0.5)}
                    />
                </View>

                <TouchableOpacity style={styles.predictButton}>
                    <View style={styles.searchIconCircle}>
                        <Ionicons name="search" size={14} color="#FFF" />
                    </View>
                    <View>
                        <Text style={styles.predictButtonText}>Predict Health Score & Get</Text>
                        <Text style={styles.predictButtonText}>Recommendations</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Footer Info */}
            <View style={styles.footerInfo}>
                <Text style={styles.handIcon}>👆</Text>
                <Text style={styles.footerText}>
                    Fill in the form above and click <Text style={styles.orangeText}>'Predict Health Score & Get Recommendations'</Text> to see your personalized health analysis.
                </Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EFF5',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    headerIconBox: {
        width: 44,
        height: 44,
        backgroundColor: '#008080', // Teal
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    headerTextBox: {
        flex: 1,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
    },
    headerDescription: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
        marginBottom: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingBottom: 15,
    },
    cardIcon: {
        marginRight: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    formGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    metricContainer: {
        width: '48%', // Approx 2 columns
        marginBottom: 16,
    },
    metricLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    metricLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: '#555',
    },
    dropdownInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EEE',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#FAFAFA',
    },
    dropdownText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
    },
    stepperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EEE',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor: '#FAFAFA',
    },
    stepperValue: {
        fontSize: 13,
        fontWeight: '600',
        color: '#333',
    },
    unitText: {
        fontSize: 10,
        fontWeight: 'normal',
        color: '#888',
    },
    stepperControls: {
        flexDirection: 'row',
    },
    stepperButton: {
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    stepperButtonText: {
        fontSize: 16,
        color: '#666',
        fontWeight: 'bold',
        marginHorizontal: 4,
    },
    predictButton: {
        backgroundColor: '#FF3D00', // Deep Orange
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        marginTop: 10,
        shadowColor: '#FF3D00',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    searchIconCircle: {
        width: 24,
        height: 24,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    predictButtonText: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    footerInfo: {
        backgroundColor: '#DDE5EB', // Light cool grey
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    handIcon: {
        fontSize: 20,
        marginRight: 10,
        marginTop: 2,
    },
    footerText: {
        fontSize: 12,
        color: '#555',
        flex: 1,
        lineHeight: 18,
    },
    orangeText: {
        color: '#FF3D00',
        fontWeight: 'bold',
    },
});
