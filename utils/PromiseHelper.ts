export function getPromiseDelay () {
    const Delays = [3000, 6000]

    return Delays[(Math.floor(Math.random() * 2))];
}

export function getPromiseResult(): 'success' | 'error' {
    const Results: ('success' | 'error')[] = ['success', 'error'];
    return Results[Math.floor(Math.random() * 2)];
}