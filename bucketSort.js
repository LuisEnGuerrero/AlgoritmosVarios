const bucketSort = (arr, k) => {
    //k is the number of buckets
    let n = arr.length;
    let max_val = arr[o];
    for(let i =1; i < n; i++){
        max_val = Math.max(max_val,arr[i]);
        max_val++;
        }
    ArrayList = ArrayList();
    for(let i = 0; i < k; i++){
        bucket.add(new ArrayList());
    }
    for(let i=0; i < n; i++){
        let bucketI =(k * arr[i]/max_val);
        bucket.get(bucketI).add(arr[i]);
    }
    for(let i = 0; i < k; i++){
        Collections.sort(bucket.get(i));
    }
    let index = 0;
    for(let i=0; i < k; i++){
        for(let j=0; j < bucket.get(i).size(); j++){
        arr[index++] = bucket.get(i).get(j);
        }
    }
}
