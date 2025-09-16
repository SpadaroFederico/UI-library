import Button from "./components/Button";

export default function App() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Buttons</h1>

      {/* Dimensioni */}
      <div className="flex gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* Colori */}
      <div className="flex gap-3">
        <Button color="primary">Primary</Button>
        <Button color="danger">Danger</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
      </div>

      {/* Forme */}
      <div className="flex gap-3">
        <Button shape="default">Default</Button>
        <Button shape="rounded">Rounded</Button>
        <Button shape="pill">Pill</Button>
        <Button shape="skewed">Skewed</Button>
        <Button shape="cut">Cut Corner</Button>
      </div>

      {/* Stato loading e disabled */}
      <div className="flex gap-3">
        <Button loading loadingType="mosquito">Loading…</Button>
        <Button loading loadingType="spinner">Loading…</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}
