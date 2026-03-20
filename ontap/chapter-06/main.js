function getUrl(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => callback(script);
    script.onerror = () => callback(script, 'error');
    document.head.appendChild(script);
};
// Thay link thành file js thực tế, ví dụ: thư viện lodash
getUrl('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', function (script, error) {
    if (error) {
        console.error('Error loading script:', error);
    } else {
        getUrl('https://cdn.tailwindcss.com', function (script, error) {
            if (error) {
                console.error('Error loading script:', error);
            } else {
                getUrl('https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4', function (script, error) {
                    if (error) {
                        console.error('Error loading script:', error);
                    } else {
                        console.log('Script loaded', script);
                    }
                });
            }
        });
    }
});


function getUser() {
    fetch('https://api.fake-rest.refine.dev/users')
        .then(response => response.json())
        .then(data => {
            const newData = data.map(user => {
                return `<li>${user.firstName} - ${user.lastName}</li>`;
            }).join('');

            document.querySelector('#user').innerHTML = newData;
        })
        .catch(error => console.error('Error loading users:', error));
}
getUser();