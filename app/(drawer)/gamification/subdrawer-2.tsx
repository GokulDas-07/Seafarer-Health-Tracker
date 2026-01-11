import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Reusable Goal Card Component
const GoalCard = ({
    iconName,
    iconColor,
    title,
    subtitle,
    points,
    current,
    target,
    unit,
    progressColor,
    progressValue, // 0 to 1
    achievementIcon,
    achievementIconBg,
    achievementTitle,
    achievementSubtitle,
    isEarned,
    achievementPoints,
}: any) => {
    return (
        <View style={styles.card}>
            {/* Card Header */}
            <View style={styles.cardHeaderRow}>
                <View style={styles.titleRow}>
                    <MaterialCommunityIcons name={iconName} size={22} color={iconColor} style={styles.mainIcon} />
                    <Text style={styles.cardTitle}>{title}</Text>
                </View>
                <View style={styles.pointsBadge}>
                    <Text style={styles.pointsText}>{points} pts</Text>
                </View>
            </View>

            <Text style={styles.cardSubtitle}>{subtitle}</Text>

            {/* Progress Section */}
            <View style={styles.progressSection}>
                <View style={styles.progressLabels}>
                    <Text style={styles.progressLabel}>Current: <Text style={styles.progressValue}>{current} {unit}</Text></Text>
                    <Text style={styles.progressLabel}>Target: <Text style={styles.progressValue}>{target} {unit}</Text></Text>
                </View>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: `${Math.min(progressValue * 100, 100)}%`, backgroundColor: progressColor }]} />
                </View>
            </View>

            {/* Achievement Sub-card */}
            <View style={styles.achievementCard}>
                <View style={[styles.achievementIconCircle, { backgroundColor: achievementIconBg }]}>
                    <MaterialCommunityIcons name={achievementIcon} size={24} color="#008080" />
                    {/* Note: Icon color hardcoded to teal per design for Steps/Sleep, but might change for others if needed. 
              For 'Heart Health Hero' it looks gray in design. Adjusting below.
          */}
                </View>
                <View style={styles.achievementContent}>
                    <Text style={styles.achievementTitle}>{achievementTitle}</Text>
                    <Text style={styles.achievementSubtitle}>{achievementSubtitle}</Text>

                    <View style={[styles.statusBadge, { backgroundColor: isEarned ? '#E0F2F1' : '#F5F5F5' }]}>
                        <MaterialCommunityIcons
                            name={isEarned ? "trophy" : "lock"}
                            size={14}
                            color={isEarned ? "#008080" : "#999"}
                        />
                        <Text style={[styles.statusText, { color: isEarned ? "#008080" : "#999" }]}>
                            {isEarned ? " Earned" : " Locked"} - {achievementPoints} points
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default function SubDrawer2() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Daily Goals Progress</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="#000" />
                </TouchableOpacity> */}
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Steps Goal */}
                <GoalCard
                    iconName="check-circle"
                    iconColor="#008080"
                    title="Steps Goal"
                    subtitle="Complete more steps than average"
                    points="50"
                    current="9,822"
                    target="7,651"
                    unit=""
                    progressColor="#008080"
                    progressValue={1.0}
                    achievementIcon="run"
                    achievementIconBg="#E0F7FA" // Light cyan
                    achievementTitle="Steps Champion"
                    achievementSubtitle="STEPS GOAL"
                    isEarned={true}
                    achievementPoints="50"
                />

                {/* Sleep Goal */}
                <GoalCard
                    iconName="check-circle"
                    iconColor="#008080"
                    title="Sleep Goal"
                    subtitle="Get 8h sleep average"
                    points="50"
                    current="7.7"
                    target="8.0"
                    unit="hrs"
                    progressColor="#008080"
                    progressValue={7.7 / 8.0}
                    achievementIcon="bed"
                    achievementIconBg="#E0F2F1" // Light teal
                    achievementTitle="Sleep Master"
                    achievementSubtitle="SLEEP GOAL"
                    isEarned={true}
                    achievementPoints="50"
                />

                {/* Heart Rate Goal */}
                <GoalCard
                    iconName="timer-sand" // Approximate hourglass icon
                    iconColor="#FF9800" // Orange
                    title="Heart Rate Goal"
                    subtitle="Maintain HR within 60-90 bpm"
                    points="30"
                    current="92.2"
                    target="60-90"
                    unit="bpm"
                    progressColor="#FF9800"
                    progressValue={1.0} // Warning state, keeping full bar as per design
                    achievementIcon="heart"
                    achievementIconBg="#F5F5F5" // Grey
                    achievementTitle="Heart Health Hero"
                    achievementSubtitle="HEART RATE GOAL"
                    isEarned={false}
                    achievementPoints="30"
                />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EFF5', // Light blue-ish grey background matches previous screens
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        // paddingTop: 50, // SafeArea spacing
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
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    cardHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainIcon: {
        marginRight: 8,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    },
    pointsBadge: {
        backgroundColor: '#E0F2F1', // Light teal pill
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    pointsText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#00695C', // Darker teal text
    },
    cardSubtitle: {
        fontSize: 13,
        color: '#666',
        marginBottom: 16,
        marginLeft: 30, // Indent to align with text start
    },
    progressSection: {
        marginBottom: 20,
    },
    progressLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    progressLabel: {
        fontSize: 12,
        color: '#111',
        fontWeight: 'bold',
    },
    progressValue: {
        fontWeight: 'normal',
        color: '#555',
    },
    progressBarBg: {
        height: 8,
        backgroundColor: '#ECEFF1',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        borderRadius: 4,
    },
    achievementCard: {
        flexDirection: 'row',
        backgroundColor: '#FAFAFA', // Very light grey inner card
        borderRadius: 16,
        padding: 16,
        alignItems: 'center',
    },
    achievementIconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    achievementContent: {
        flex: 1,
    },
    achievementTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222',
    },
    achievementSubtitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#008080',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8,
    },
    statusText: {
        fontSize: 11,
        fontWeight: 'bold',
        marginLeft: 4,
    },
});
