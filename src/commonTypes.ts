// Upgrades List
export type Upgrade = {
    name: string;
    price: number;
    // isUnlock: boolean;
    ttl: number; // Time to live in s
    output: number; // Essence/s
}
