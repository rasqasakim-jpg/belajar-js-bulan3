import React from "react";
import UserCard from "../components/UserCard";
import ProductList from "../components/ProductList";
import Form from "../components/Form";
import { useFetch } from "../components/useFetch";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

const partialUser: Partial<User> = { name: "Alice" };
const pickedUser: Pick<User, "name" | "email"> = { name: "Bob", email: "bob@mail.com" };
const normalUser: Omit<User, "isAdmin"> = { id: 1, name: "Charlie", email: "charlie@mail.com" };
const userRoles: Record<string, string> = {
  admin: "Full Access",
  guest: "Read Only",
  editor: "Edit Access",
};

function isProduct(data: any): data is Product {
  return data && typeof data.id === "number" && typeof data.title === "string";
}

export default function Exercise() {
  const { data, loading, error } = useFetch<Product[]>(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=5"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h1>Exercise: Type-Safe Components & Advanced TS</h1>

      <section>
        <h2>Utility Types</h2>
        <p><strong>Partial:</strong> {JSON.stringify(partialUser)}</p>
        <p><strong>Pick:</strong> {JSON.stringify(pickedUser)}</p>
        <p><strong>Omit:</strong> {JSON.stringify(normalUser)}</p>
        <p><strong>Record:</strong> {JSON.stringify(userRoles)}</p>
      </section>

      <section>
        <h2>Fetched Products</h2>
        <div className="product-list">
          {data && data.map((item) =>
            isProduct(item) ? (
              <div key={item.id} className="product-card">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            ) : (
              <p key={item.id}>Invalid product data</p>
            )
          )}
        </div>
      </section>

      <UserCard name="Dinda" age={22} isOnline={true} />
      <ProductList title="Product List Example" products={data || []} />
      <Form />
    </div>
  );
}
