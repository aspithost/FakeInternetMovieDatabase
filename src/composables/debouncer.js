const debouncer = (fn, timeout=300) => {
    let timer;
    return event =>  {
        if (timer) clearTimeout(timer);
        timer = setTimeout(fn, timeout, event);
    }
}

export default debouncer