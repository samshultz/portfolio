export function fetchResource(apiUrl, lookupOptions = null) {
    let data;
    if (lookupOptions) {
        data = fetch(`http://127.0.0.1:8000${apiUrl}`, lookupOptions)
    } else {
        data = fetch(`http://127.0.0.1:8000${apiUrl}`).then(response => response.json())
    }
    // samtaiwo.pythonanywhere.com
    
    return data
}