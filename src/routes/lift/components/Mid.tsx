import { component$, useSignal, $ } from "@builder.io/qwik";
import { routeLoader$ } from '@builder.io/qwik-city';
 import { useBottomData, Bottom } from "./Bottom";

export const useMidData = routeLoader$(async () => {
    useBottomData();
    return {
        data: 'mid'
    }
})

export const Mid = component$(() => {
    const mid = useMidData();
    return (
        <div>
        mid
        <pre>{JSON.stringify(mid.value, null, 2)}</pre>
        <Bottom />
        </div>
    );
});
