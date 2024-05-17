import React from "react";
import CardPrice, {Feature} from "@/app/_component/card_price";

interface CardProps {
    plan: string; price: string; feature: Feature[];
}

function ListCardProps(): CardProps[] {
    return [
        {
            plan: "Starter",
            price: "0",
            feature: [
                {
                    name: "5GB Storage",
                    include: true
                },
                {
                    name: "Unlimited Public Projects",
                    include: true
                },
                {
                    name: "Community Access",
                    include: true
                },
                {
                    name: "Unlimited Private Projects",
                    include: false
                },
            ],
        },
        {
            plan: "Premium",
            price: "10",
            feature: [
                {
                    name: "5GB Storage",
                    include: true
                },
                {
                    name: "Unlimited Public Projects",
                    include: true
                },
                {
                    name: "Community Access",
                    include: true
                },
                {
                    name: "Unlimited Private Projects",
                    include: true
                },
            ],
        },
        {
            plan: "Enterprise",
            price: "100",
            feature: [
                {
                    name: "100GB Storage",
                    include: true
                },
                {
                    name: "Unlimited Public Projects",
                    include: true
                },
                {
                    name: "Community Access",
                    include: true
                },
                {
                    name: "Unlimited Private Projects",
                    include: true
                },
            ],
        }
    ]
}

export default function PricingPage() {
    let item = ListCardProps()
    let itemElement = item.map(i => {
        return (
            // eslint-disable-next-line react/jsx-key
            <CardPrice key={i.plan} plan={i.plan} price={i.price} feature={i.feature} />
        )
    })
    return (
        <>
            <div className="flex-wrap mt-6 items-center">
                <h2 className="text-2xl text-center font-extrabold tracking-tight text-gray-900 dark:text-white">Pricing</h2>
                <div className="flex justify-center">
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 mt-10 mb-10">
                        {itemElement}
                    </div>
                </div>
            </div>
        </>
    )
}