import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { usePathname } from 'expo-router';

function CustomDrawerContent(props: any) {
    const [isGamificationExpanded, setIsGamificationExpanded] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />

            {/* Expandable Gamification Section */}
            <View>
                <TouchableOpacity
                    style={styles.expandableHeader}
                    onPress={() => setIsGamificationExpanded(!isGamificationExpanded)}
                >
                    <View style={styles.expandableHeaderContent}>
                        <Ionicons name="game-controller-outline" size={24} color={isGamificationExpanded ? "#008080" : "#666"} />
                        <Text style={[styles.expandableLabel, isGamificationExpanded && styles.activeLabel]}>Gamification</Text>
                    </View>
                    <Ionicons
                        name={isGamificationExpanded ? "chevron-up" : "chevron-down"}
                        size={20}
                        color={isGamificationExpanded ? "#008080" : "#666"}
                    />
                </TouchableOpacity>

                {isGamificationExpanded && (
                    <View style={styles.subMenuContainer}>
                        <DrawerItem
                            label="Dashboard"
                            focused={pathname === '/gamification/subdrawer-1'}
                            activeTintColor="#008080"
                            icon={({ color, size }) => <MaterialIcons name="dashboard" size={size} color={color} />}
                            onPress={() => router.push('/(drawer)/gamification/subdrawer-1')}
                        />
                        <DrawerItem
                            label="Daily Goals Progress"
                            focused={pathname === '/gamification/subdrawer-2'}
                            activeTintColor="#008080"
                            icon={({ color, size }) => <Octicons name="goal" size={size} color={color} />}
                            onPress={() => router.push('/(drawer)/gamification/subdrawer-2')}
                        />
                        <DrawerItem
                            label="Badges & Achievements"
                            focused={pathname === '/gamification/subdrawer-3'}
                            activeTintColor="#008080"
                            icon={({ color, size }) => <Ionicons name="medal-outline" size={size} color={color} />}
                            onPress={() => router.push('/(drawer)/gamification/subdrawer-3')}
                        />
                        <DrawerItem
                            label="Weekly Progress"
                            focused={pathname === '/gamification/subdrawer-4'}
                            activeTintColor="#008080"
                            icon={({ color, size }) => <Ionicons name="trending-up" size={size} color={color} />}
                            onPress={() => router.push('/(drawer)/gamification/subdrawer-4')}
                        />
                    </View>
                )}
            </View>
        </DrawerContentScrollView>
    );
}

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerActiveTintColor: '#008080',
                    
                }}
            >
                <Drawer.Screen
                    name="digital-health-coach"
                    options={{
                        drawerLabel: 'Digital Health Coach',
                        title: 'Digital Health Coach',
                        drawerIcon: ({ color, size }) => (
                            <Ionicons name="fitness" size={size} color={color} />
                        ),
                    }}
                />

                {/* Subdrawers are hidden from the main list but accessible via the custom menu */}
                <Drawer.Screen
                    name="gamification/subdrawer-1"
                    options={{
                        drawerItemStyle: { display: 'none' }, // Hide from default list
                        title: 'Dashboard',
                    }}
                />
                <Drawer.Screen
                    name="gamification/subdrawer-2"
                    options={{
                        drawerItemStyle: { display: 'none' }, // Hide from default list
                        title: 'Daily Goals Progress',
                    }}
                />
                <Drawer.Screen
                    name="gamification/subdrawer-3"
                    options={{
                        drawerItemStyle: { display: 'none' }, // Hide from default list
                        title: 'Badges & Achievements',
                    }}
                />
                <Drawer.Screen
                    name="gamification/subdrawer-4"
                    options={{
                        drawerItemStyle: { display: 'none' }, // Hide from default list
                        title: 'Weekly Progress',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    expandableHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 19, // Match default drawer item padding
        marginTop: 5,
    },
    expandableHeaderContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    expandableLabel: {
        fontSize: 14, // Roughly drawer label size
        fontWeight: '500',
        color: '#333',
    },
    activeLabel: {
        color: '#008080',
        fontWeight: '700',
    },
    subMenuContainer: {
        paddingLeft: 20, // Indent sub-items
    },
});
