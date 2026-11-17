const features = [
  "Quality-focused crop protection products",
  "Trusted support for farmers and agricultural partners",
  "Consistent solutions designed for better yields",
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "96px 0",
        background: "linear-gradient(180deg, #F7F8F3 0%, #EDF5EC 100%)",
      }}
    >
      <div
        className="container-custom"
        style={{
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "40px",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              marginBottom: "18px",
              color: "#087B46",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            About us
          </span>

          <h2
            style={{
              margin: "0 0 20px",
              color: "#202923",
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.12,
              letterSpacing: "-1.8px",
            }}
          >
            Growing healthier crops with dependable agricultural solutions.
          </h2>

          <p
            style={{
              margin: "0 0 18px",
              color: "#3e4a41",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            Crop Care is committed to helping farmers and agricultural businesses
            protect their crops with effective, reliable and quality-driven
            products.
          </p>

          <p
            style={{
              margin: "0 0 26px",
              color: "#3e4a41",
              fontSize: "17px",
              lineHeight: 1.8,
            }}
          >
            We believe in practical solutions, honest service and long-term
            partnerships that support sustainable growth in agriculture.
          </p>

          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: "12px",
            }}
          >
            {features.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#1a2b22",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    display: "inline-block",
                    borderRadius: "50%",
                    background: "#36A65C",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #E3EAE2",
            borderRadius: "22px",
            boxShadow: "0 18px 42px rgba(26, 43, 34, 0.08)",
            padding: "30px",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            <div
              style={{
                background: "#EDF5EC",
                borderRadius: "14px",
                padding: "20px",
              }}
            >
              <div style={{ color: "#087B46", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
                Mission
              </div>
              <p style={{ margin: "12px 0 0", color: "#202923", fontSize: "18px", lineHeight: 1.7 }}>
                To support healthier crops and stronger agricultural outcomes with trusted crop protection solutions.
              </p>
            </div>

            <div
              style={{
                background: "#F7F8F3",
                borderRadius: "14px",
                padding: "20px",
                border: "1px solid #E3EAE2",
              }}
            >
              <div style={{ color: "#087B46", fontSize: "12px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
                Values
              </div>
              <p style={{ margin: "12px 0 0", color: "#202923", fontSize: "18px", lineHeight: 1.7 }}>
                Quality, reliability, customer trust and sustainable agricultural growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
