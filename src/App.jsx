import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  return (
    <div className="p-6 space-y-10">
      {/* ================= BUTTONS ================= */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Buttons</h1>

        {/* Dimensioni */}
        <h2 className="text-lg font-semibold mb-2">Dimensioni</h2>
        <div className="flex gap-3 mb-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        {/* Colori */}
        <h2 className="text-lg font-semibold mb-2">Colori</h2>
        <div className="flex gap-3 mb-4">
          <Button color="primary">Primary</Button>
          <Button color="danger">Danger</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
        </div>

        {/* Forme */}
        <h2 className="text-lg font-semibold mb-2">Forme</h2>
        <div className="flex gap-3 mb-4">
          <Button shape="default">Default</Button>
          <Button shape="rounded">Rounded</Button>
          <Button shape="pill">Pill</Button>
          <Button shape="skewed">Skewed</Button>
          <Button shape="cut">Cut Corner</Button>
        </div>

        {/* Stato loading e disabled */}
        <h2 className="text-lg font-semibold mb-2">Stati</h2>
        <div className="flex gap-3">
          <Button loading loadingType="mosquito">Loading…</Button>
          <Button loading loadingType="spinner">Loading…</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* ================= INPUTS ================= */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Inputs</h1>

        {/* Input base */}
        <h2 className="text-lg font-semibold mb-2">Base</h2>
        <div className="space-y-3 mb-4">
          <Input label="Nome" placeholder="Inserisci il tuo nome" />
          <Input label="Email" type="email" placeholder="Inserisci la tua email" />
        </div>

        {/* Dimensioni */}
        <h2 className="text-lg font-semibold mb-2">Dimensioni</h2>
        <div className="flex gap-4 mb-4">
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
        </div>

        {/* Stato errore */}
        <h2 className="text-lg font-semibold mb-2">Errore</h2>
        <Input
          label="Password"
          type="password"
          placeholder="Inserisci la password"
          error="La password deve avere almeno 8 caratteri"
        />

        {/* Stato disabilitato */}
        <h2 className="text-lg font-semibold mb-2">Disabilitato</h2>
        <Input label="Username" placeholder="Non modificabile" disabled />
      </section>
    </div>
  );
}
