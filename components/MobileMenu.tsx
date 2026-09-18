type Item = { label: string; href: string };
export function MobileMenu({ items }: { items: Item[] }) { return <details className="menu-disclosure"><summary>Menu</summary><nav aria-label="Mobile navigation"><ul>{items.map(item => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}</ul></nav></details>; }
