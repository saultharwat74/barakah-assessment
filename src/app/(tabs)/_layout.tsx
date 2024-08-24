import TabBarIcon from "@/components/TabBarIcon";
import TabBarLabel from "@/components/TabBarLabel";
import { Tabs } from "expo-router";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: { borderTopWidth: 0 } }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} routerKey="index" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} routerKey="index" />
          ),
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} routerKey="catalog" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} routerKey="catalog" />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} routerKey="cart" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} routerKey="cart" />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} routerKey="favorites" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} routerKey="favorites" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} routerKey="profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} routerKey="profile" />
          ),
        }}
      />
    </Tabs>
  );
}
