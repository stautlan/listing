export default function readJSON(fileName: string) {
    const data = JSON.parse(fileName);
    console.log('Type: ', typeof data);
    console.log('Contents: ', data);
return data;
}