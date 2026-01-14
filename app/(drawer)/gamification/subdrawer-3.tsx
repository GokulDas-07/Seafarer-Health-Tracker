import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SubDrawer3() {
    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Header */}
                <View style={styles.header}>
                    {/* <View style={styles.headerLeft}>
                        <View style={styles.trophyIconCircle}>
                            <Ionicons name="trophy" size={20} color="#FFA000" />
                        </View>
                        <Text style={styles.headerTitle}>Achievements</Text>
                    </View>
                    <View style={styles.profileCircle}>
                        <Ionicons name="person" size={16} color="#555" />
                    </View> */}
                </View>

                {/* Recent Awards */}
                <View style={styles.sectionHeaderRow}>
                    {/* <MaterialCommunityIcons name="heart-pulse" size={16} color="#EF5350" /> */}
                    <Text style={styles.sectionTitle}>GOAL COMPLETION BADGES</Text>
                    {/* <Text style={styles.viewAllText}>View All</Text> */}
                </View>

                <View style={styles.awardsGrid}>
                    {/* Steps Champ */}
                    <View style={styles.awardCard}>
                        <View style={[styles.awardIconCircle, { backgroundColor: '#E0F2F1' }]}>
                            <MaterialCommunityIcons name="run" size={20} color="#008080" />
                        </View>
                        <View style={styles.statusIcon}>
                            <Ionicons name="checkmark-circle" size={16} color="#81C784" />
                        </View>
                        <Text style={styles.awardTitle}>Steps Champ</Text>
                        <Text style={styles.awardDate}>Steps Goal</Text>
                    </View>

                    {/* Sleep Master */}
                    <View style={styles.awardCard}>
                        <View style={[styles.awardIconCircle, { backgroundColor: '#E8EAF6' }]}>
                            <Ionicons name="moon" size={20} color="#3F51B5" />
                        </View>
                        <View style={styles.statusIcon}>
                            <Ionicons name="checkmark-circle" size={16} color="#3F51B5" />
                        </View>
                        <Text style={styles.awardTitle}>Sleep Master</Text>
                        <Text style={styles.awardDate}>Sleep Goal</Text>
                    </View>

                    {/* Health Star */}
                    <View style={styles.awardCard}>
                        <View style={[styles.awardIconCircle, { backgroundColor: '#FFF8E1' }]}>
                            <MaterialIcons name="balance" size={20} color="#FFB300" />
                        </View>
                        <View style={styles.statusIcon}>
                            <Ionicons name="checkmark-circle" size={16} color="#FFD54F" />
                        </View>
                        <Text style={styles.awardTitle}>Balance Master</Text>
                        <Text style={styles.awardDate}>Work-Life Balance</Text>
                    </View>

                    {/* Heart Hero - Locked */}
                    <View style={[styles.awardCard, { opacity: 0.7 }]}>
                        <View style={[styles.awardIconCircle, { backgroundColor: '#EEEEEE' }]}>
                            <Ionicons name="heart" size={20} color="#BDBDBD" />
                        </View>
                        <View style={styles.statusIcon}>
                            <Ionicons name="lock-closed" size={14} color="#BDBDBD" />
                        </View>
                        <Text style={[styles.awardTitle, { color: '#757575' }]}>Heart Hero</Text>
                        <Text style={styles.awardDate}>Locked</Text>
                    </View>
                </View>


                {/* Insights */}
                <Text style={[styles.sectionTitle, { marginTop: 24, marginBottom: 12 }]}>INSIGHTS</Text>
                <View style={styles.insightsRow}>
                    {/* Heart Rate Insight */}
                    <View style={styles.insightCard}>
                        <View style={styles.insightHeader}>
                            <MaterialCommunityIcons name="heart-pulse" size={16} color="#EF5350" />
                            <Text style={styles.insightTitle}>Heart Rate</Text>
                        </View>
                        <View style={styles.insightValueRow}>
                            <Text style={styles.insightValue}>92</Text>
                            <Text style={styles.insightUnit}>bpm</Text>
                        </View>
                        <Text style={styles.insightSubtext}>2 bpm above range.</Text>

                        <View style={[styles.tipBox, { backgroundColor: '#FFEBEE' }]}>
                            <View style={styles.tipDotRed} />
                            <Text style={styles.tipText}>Try deep breathing exercises.</Text>
                        </View>
                    </View>

                    {/* Work-Life Insight */}
                    <View style={styles.insightCard}>
                        <View style={styles.insightHeader}>
                            <MaterialCommunityIcons name="scale-balance" size={16} color="#FF9800" />
                            <Text style={styles.insightTitle}>Work-Life</Text>
                        </View>
                        <View style={styles.insightValueRow}>
                            <Text style={styles.insightValue}>2.5</Text>
                            <Text style={styles.insightUnit}>hrs</Text>
                        </View>
                        <Text style={styles.insightSubtext}>Below recommended range.</Text>

                        <View style={[styles.tipBox, { backgroundColor: '#FFF3E0' }]}>
                            <View style={styles.tipDotOrange} />
                            <Text style={styles.tipText}>Aim for 5-10 working hours.</Text>
                        </View>
                    </View>
                </View>

                {/* Milestones */}
                <Text style={[styles.sectionTitle, { marginTop: 24, marginBottom: 12 }]}>MILESTONES</Text>

                <View style={styles.milestonesContainer}>
                    {/* <View style={styles.milestonesLeftCol}> */}
                        {/* Beginner */}
                       {/*  <View style={styles.milestoneSmallCard}>
                            <Ionicons name="star" size={18} color="#2979FF" style={{ marginBottom: 4 }} />
                            <Text style={styles.milestoneName}>Beginner</Text>
                            <Ionicons name="checkmark" size={12} color="#00C853" />
                        </View> */}

                        {/* Rising Star */}
                        {/* <View style={styles.milestoneSmallCard}>
                            <Ionicons name="star" size={18} color="#2979FF" style={{ marginBottom: 4 }} />
                            <Text style={styles.milestoneName}>Rising Star</Text>
                            <Ionicons name="checkmark" size={12} color="#2979FF" />
                        </View> */}

                        {/* Champ (Locked) */}
                        {/* <View style={[styles.milestoneSmallCard, styles.lockedCard]}>
                            <MaterialCommunityIcons name="trophy" size={18} color="#BDBDBD" style={{ marginBottom: 4 }} />
                            <Text style={[styles.milestoneName, { color: '#9E9E9E' }]}>Champ</Text>
                            <Ionicons name="lock-closed" size={10} color="#BDBDBD" />
                        </View> */}

                        {/* Legend (Locked) */}
                        {/* <View style={[styles.milestoneSmallCard, styles.lockedCard]}>
                            <MaterialCommunityIcons name="medal" size={18} color="#BDBDBD" style={{ marginBottom: 4 }} />
                            <Text style={[styles.milestoneName, { color: '#9E9E9E' }]}>Legend</Text>
                            <Ionicons name="lock-closed" size={10} color="#BDBDBD" />
                        </View>
                    </View> */}

                    {/* Featured Milestone: Health Warrior */}
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={[styles.milestoneFeaturedCard, {backgroundColor: '#edf8eeff',borderColor: '#abfaaeff'}]}>
                        <MaterialIcons name="eco" size={48} color="#7cc70cff" style={{ marginBottom: 16 }} />
                        <Text style={styles.featuredTitle}>Beginner</Text>
                        <Text style={styles.featuredSubtitle}>Start your journey</Text>

                        <View style={[styles.achievedBadge,{backgroundColor: '#7cc70cff'}]}>
                            <Ionicons name="checkmark" size={12} color="#FFF" style={{ marginRight: 4 }} />
                            <Text style={styles.achievedText}>Achieved</Text>
                        </View>
                    </View>
                    <View style={[styles.milestoneFeaturedCard, {backgroundColor: '#daebf5ff',borderColor: '#9cccfaff'}]}>
                        <MaterialCommunityIcons name="star-shooting" size={48} color="#43a1e0ff" style={{ marginBottom: 16 }} />
                        <Text style={styles.featuredTitle}>Rising Star</Text>
                        <Text style={styles.featuredSubtitle}>Earn 100+ pts</Text>

                        <View style={[styles.achievedBadge,{backgroundColor: '#4fadecff'}]}>
                            <Ionicons name="checkmark" size={12} color="#FFF" style={{ marginRight: 4 }} />
                            <Text style={styles.achievedText}>Achieved</Text>
                        </View>
                    </View>
                    <View style={[styles.milestoneFeaturedCard, {backgroundColor: '#F6F1E6',borderColor: '#FFE0B2'}]}>
                        <MaterialCommunityIcons name="sword-cross" size={48} color="#FFA000" style={{ marginBottom: 16 }} />
                        <Text style={styles.featuredTitle}>Health Warrior</Text>
                        <Text style={styles.featuredSubtitle}>Earn 200+ pts</Text>

                        <View style={styles.achievedBadge}>
                            <Ionicons name="checkmark" size={12} color="#FFF" style={{ marginRight: 4 }} />
                            <Text style={styles.achievedText}>Achieved</Text>
                        </View>
                    </View>
                    <View style={[styles.milestoneFeaturedCard,{ opacity: 0.7, backgroundColor: '#EEEEEE', borderColor: '#BDBDBD' }]}>
                        <MaterialCommunityIcons name="medal" size={48} color="#BDBDBD" style={{ marginBottom: 16 }} />
                        <Text style={styles.featuredTitle}>Champion</Text>
                        <Text style={styles.featuredSubtitle}>Earn 250+ pts</Text>

                        <View style={[styles.achievedBadge,{backgroundColor: '#BDBDBD'}]}>
                            <Ionicons name="lock-closed" size={12} color="#FFF" style={{ marginRight: 4 }} />
                            <Text style={styles.achievedText}>Locked</Text>
                        </View>
                    </View>
                    <View style={[styles.milestoneFeaturedCard,{ opacity: 0.7, backgroundColor: '#EEEEEE', borderColor: '#BDBDBD' }]}>
                        <MaterialCommunityIcons name="trophy" size={48} color="#BDBDBD" style={{ marginBottom: 16 }} />
                        <Text style={styles.featuredTitle}>Legend</Text>
                        <Text style={styles.featuredSubtitle}>Earn 300+ pts</Text>

                        <View style={[styles.achievedBadge,{backgroundColor: '#BDBDBD'}]}>
                            <Ionicons name="lock-closed" size={12} color="#FFF" style={{ marginRight: 4 }} />
                            <Text style={styles.achievedText}>Locked</Text>
                        </View>
                    </View>
                    </ScrollView>
                </View>

            </ScrollView>

            {/* Footer: Current Level */}
            <View style={styles.footer}>
                <View style={styles.footerHeader}>
                    <Text style={styles.footerLabel}>CURRENT LEVEL</Text>
                    <Text style={styles.nextLevelText}>NEXT: CHAMPION</Text>
                </View>
                <View style={styles.levelRow}>
                    <Text style={styles.currentLevelName}>Health Warrior</Text>
                    <Text style={styles.pointsProgress}><Text style={{ color: '#008080', fontWeight: 'bold' }}>200</Text> <Text style={{ color: '#999' }}>/ 250 pts</Text></Text>
                </View>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: '80%' }]} />
                </View>
                <View style={{flexDirection:'row',alignItems:'center',gap:4, justifyContent:'center'}}>
                    <Text style={{color: '#f54242ff', fontWeight: 'bold'}}>50</Text>
                    <Text style={styles.pointsToGo}>points to go</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EFF5',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 145,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        // marginTop: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    trophyIconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFF8E1',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#111',
    },
    profileCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionHeaderRow: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        gap: 6
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#455A64',
        letterSpacing: 0.5,
    },
    viewAllText: {
        fontSize: 12,
        color: '#008080',
        fontWeight: '600',
    },
    awardsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    awardCard: {
        width: '48%',
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
    },
    awardIconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    statusIcon: {
        position: 'absolute',
        top: 12,
        right: 12,
    },
    awardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 4,
    },
    awardDate: {
        fontSize: 11,
        color: '#999',
    },
    insightsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    insightCard: {
        width: '48%',
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
    },
    insightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        gap: 6,
    },
    insightTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#333',
    },
    insightValueRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 4,
    },
    insightValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111',
    },
    insightUnit: {
        fontSize: 14,
        color: '#777',
        marginLeft: 4,
    },
    insightSubtext: {
        fontSize: 11,
        color: '#777',
        marginBottom: 12,
    },
    tipBox: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        alignItems: 'flex-start',
    },
    tipDotRed: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#EF5350',
        marginTop: 4,
        marginRight: 6,
    },
    tipDotOrange: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#FF9800',
        marginTop: 4,
        marginRight: 6,
    },
    tipText: {
        fontSize: 10,
        color: '#555',
        flex: 1,
        lineHeight: 14,
    },
    milestonesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    milestonesLeftCol: {
        width: '48%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    milestoneSmallCard: {
        width: '47%',
        aspectRatio: 1,
        backgroundColor: '#FFF',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    lockedCard: {
        backgroundColor: '#F5F5F5',
    },
    milestoneLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    milestoneName: {
        fontSize: 10,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
        textAlign: 'center',
    },
    milestoneFeaturedCard: {
        // width: '48%',
        width: 150,
        // backgroundColor: '#F6F1E6', // Beige/Gold-ish light
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        // borderColor: '#FFE0B2',
        marginRight: 10,
    },
    featuredTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3E2723',
        marginBottom: 4,
    },
    featuredSubtitle: {
        fontSize: 12,
        color: '#795548',
        marginBottom: 12,
    },
    achievedBadge: {
        backgroundColor: '#FFA000',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    achievedText: {
        color: '#FFF',
        fontSize: 11,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
    },
    footerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    footerLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#78909C',
        letterSpacing: 0.5,
    },
    nextLevelText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#78909C',
        letterSpacing: 0.5,
    },
    levelRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    currentLevelName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    pointsProgress: {
        fontSize: 12,
    },
    progressBarBg: {
        height: 8,
        backgroundColor: '#ECEFF1',
        borderRadius: 4,
        marginBottom: 8,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#0288D1', // Blue
        borderRadius: 4,
    },
    pointsToGo: {
        fontSize: 11,
        color: '#4e4e4eff',
        textAlign: 'center',
    },
});
