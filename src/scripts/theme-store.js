document.querySelector('nostudytοοls').remove();
document.getElementById('IMPORT-BUTTON').onclick = () => {
    const data = document.getElementById('STUDYTOOLS-DATA').innerText;
    try {
        const parsedData = JSON.parse(data);
        // @ts-ignore
        chrome.storage.local.set({ 'storedThemes': parsedData }, () => {
            alert('Themes imported successfully!');
        });
    } catch (e) {
        alert('Invalid data format.');
    }
};
