export interface MarketDataItem {
    name: string;
    value: string;
    change: string;
    isPositive: boolean;
    symbol: string;
}

const symbolNames: Record<string, string> = {
    'BTCUSDT': 'Bitcoin',
    'ETHUSDT': 'Ethereum',
    'BNBUSDT': 'Binance Coin',
    'SOLUSDT': 'Solana',
    'ADAUSDT': 'Cardano',
    'DOGEUSDT': 'Dogecoin',
    'DOTUSDT': 'Polkadot',
};

export async function fetchMarketData(): Promise<MarketDataItem[]> {
    const symbols = Object.keys(symbolNames);

    try {
        const promises = symbols.map(symbol =>
            fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
                .then(res => res.json())
                .catch(error => {
                    console.error(`Error fetching ${symbol}:`, error);
                    return null;
                })
        );

        const responses = await Promise.all(promises);

        const marketData = responses
            .map((data, index) => {
                if (!data?.lastPrice || !data?.priceChangePercent) return null;

                const symbol = symbols[index];
                return {
                    name: symbolNames[symbol],
                    value: parseFloat(data.lastPrice).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }),
                    change: `${parseFloat(data.priceChangePercent).toFixed(2)}%`,
                    isPositive: parseFloat(data.priceChangePercent) > 0,
                    symbol
                } as MarketDataItem;
            })
            .filter((item): item is MarketDataItem => item !== null);

        return marketData;

    } catch (error) {
        console.error('Error fetching market data:', error);
        return [];
    }
} 