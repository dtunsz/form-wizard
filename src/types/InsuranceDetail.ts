interface Insurance{
    name: string,
    age: number,
    country: 'Hong Kong' | 'USA' | 'Australia',
    currency: 'HKD' | 'USD' | 'AUD',
    selectedPackage: 'standard' | 'safe' | 'super safe',
    packageCost: number
}

export default Insurance;