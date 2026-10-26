import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 28, color: '#8f8f8f', marginBottom: 24 }}>
          /dev
        </div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
          Reginald R. Masangya
        </div>
        <div style={{ display: 'flex', fontSize: 32, color: '#8f8f8f', marginTop: 24 }}>
          Fullstack Developer · Aspiring Software Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
