"use client";

import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { playfair } from '@/app/fonts';
import { useEffect, useRef, useState } from 'react';
import { MarketDataItem, fetchMarketData } from '@/lib/api/market-data';

function MarketTickerSkeleton() {
    return (
        <div className="flex space-x-6 whitespace-nowrap animate-pulse">
            <div className="h-4 w-16 bg-zinc-800/50 rounded"></div>
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                    <div className="h-4 w-20 bg-zinc-800/50 rounded"></div>
                    <div className="h-4 w-16 bg-zinc-800/50 rounded"></div>
                    <div className="h-4 w-14 bg-zinc-800/50 rounded"></div>
                </div>
            ))}
        </div>
    );
}

export function MarketTicker() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [marketData, setMarketData] = useState<MarketDataItem[]>([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch initial data
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const data = await fetchMarketData();
                setMarketData(data);
            } finally {
                setIsLoading(false);
            }
        };
        fetchInitialData();
    }, []);

    // Update data every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            fetchMarketData().then(setMarketData);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    // Бесконечная прокрутка
    useEffect(() => {
        if (!marketData.length) return;

        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        const scrollSpeed = 0.2;

        const animate = () => {
            setScrollPosition((prevPosition) => {
                const contentWidth = scrollContainer.scrollWidth / 3;
                const newPosition = prevPosition + scrollSpeed;

                // Когда доходим до конца первого набора данных
                if (newPosition >= contentWidth) {
                    // Возвращаемся к началу
                    return 0;
                }

                return newPosition;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        const handleMouseEnter = () => {
            cancelAnimationFrame(animationFrameId);
        };

        const handleMouseLeave = () => {
            animationFrameId = requestAnimationFrame(animate);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [marketData]);

    // Применяем позицию скролла
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollPosition;
        }
    }, [scrollPosition]);

    return (
        <div className="w-full border-b bg-background/95 h-10">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                <div ref={scrollRef} className="flex items-center h-10 overflow-x-hidden">
                    {isLoading || marketData.length === 0 ? (
                        <MarketTickerSkeleton />
                    ) : (
                        <div className="flex space-x-6 whitespace-nowrap">
                            <span className={`${playfair.className} text-sm font-semibold mr-4`}>Markets</span>
                            {marketData.map((item, i) => (
                                <div key={`first-${i}`} className="flex items-center space-x-2 min-w-fit">
                                    <span className="text-sm font-medium">{item.name}</span>
                                    <span className="text-sm">{item.value}</span>
                                    <span className={`text-sm flex items-center ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.isPositive ? (
                                            <ArrowUpIcon className="w-3 h-3 mr-1" />
                                        ) : (
                                            <ArrowDownIcon className="w-3 h-3 mr-1" />
                                        )}
                                        {item.change}
                                    </span>
                                </div>
                            ))}
                            <span className={`${playfair.className} text-sm font-semibold mr-4`}>Markets</span>
                            {marketData.map((item, i) => (
                                <div key={`second-${i}`} className="flex items-center space-x-2 min-w-fit">
                                    <span className="text-sm font-medium">{item.name}</span>
                                    <span className="text-sm">{item.value}</span>
                                    <span className={`text-sm flex items-center ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.isPositive ? (
                                            <ArrowUpIcon className="w-3 h-3 mr-1" />
                                        ) : (
                                            <ArrowDownIcon className="w-3 h-3 mr-1" />
                                        )}
                                        {item.change}
                                    </span>
                                </div>
                            ))}
                            <span className={`${playfair.className} text-sm font-semibold mr-4`}>Markets</span>
                            {marketData.map((item, i) => (
                                <div key={`third-${i}`} className="flex items-center space-x-2 min-w-fit">
                                    <span className="text-sm font-medium">{item.name}</span>
                                    <span className="text-sm">{item.value}</span>
                                    <span className={`text-sm flex items-center ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.isPositive ? (
                                            <ArrowUpIcon className="w-3 h-3 mr-1" />
                                        ) : (
                                            <ArrowDownIcon className="w-3 h-3 mr-1" />
                                        )}
                                        {item.change}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}