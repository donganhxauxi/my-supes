---
marp: true
theme: default
paginate:true
---

![](https://miro.medium.com/v2/resize:fit:200/1*elhu-42TzQEdsFjKDbQhhA.png)

# React Query

by Dan

---

# The existing problem

![alt text](image.png))

---

- The "traditional" way for fetching data:

```
const Supes = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/supers")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map(({ image, name, playedBy, superPower, id }: CardProps) => {
        return (
          <Card
            key={id}
            image={image}
            name={name}
            playedBy={playedBy}
            superPower={superPower}
          />
        );
      })}
    </div>
  );
};
export default Supes;
```

- More work required when it comes to caching, retries, deduping...

---

# The solution

- Refetch data whenever the user leave and focus back on the browser: `refetchOnWindowFocus`
- Infinite scroll feature: `useInfiniteQuery` hook
- Write data to the server and make instant changes to the UI: optimistic updates
- Debug data fetching logic: React-query Devtool
