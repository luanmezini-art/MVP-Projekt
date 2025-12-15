import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 180,
    height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 100,
                    background: '#4f46e5', // Indigo-600
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '36px', // Standard iOS rounding feel
                    fontWeight: 800,
                    fontFamily: 'sans-serif',
                }}
            >
                🚀
            </div>
        ),
        {
            ...size,
        }
    )
}
