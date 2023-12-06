import { component$, useSignal, $ } from "@builder.io/qwik";
import { routeLoader$ } from '@builder.io/qwik-city';
 

export const useBottomData = routeLoader$(async () => {
    return {
        data: 'bottom'
    }
})

export const Bottom = component$(() => {
    const bottom = useBottomData();
    return (
        <div>
        bottom
        <pre>{JSON.stringify(bottom.value, null, 2)}</pre>
        </div>
    );
});
