export const SHAPES = {
    data() {
        return {
            triangleOuter: { 'clip-path': 'polygon(50% 0%, 0 100%, 100% 100%)' },
            triangleInner: { 'clip-path': 'polygon(50% 10%, 7% 96%, 93% 96%)' },
            reverseTriangleOuter: { 'clip-path': 'polygon(50% 100%, 0 0, 100% 0)' },
            reverseTriangleInner: { 'clip-path': 'polygon(50% 90%, 7% 4%, 93% 4%)' },
            triangleLeftOuter: { 'clip-path': 'polygon(0 0, 0% 100%, 100% 0)' },
            triangleLeftInner: { 'clip-path': 'polygon(0 0, 0% 93%, 93% 0)' },
            triangleRightOuter: { 'clip-path': 'polygon(0 0, 100% 100%, 100% 0)' },
            triangleRightInner: { 'clip-path': 'polygon(7% 0, 100% 93%, 100% 0)' },
            triangleBottomInner: { 'clip-path': 'polygon(50% 10%, 5% 100%, 95% 100%)' },        
            rhombusOuter: { 'clip-path': 'polygon(50% 0, 75% 50%, 50% 100%, 25% 50%)' },
            rhombusInner: { 'clip-path': 'polygon(50% 5%, 72% 50%, 50% 95%, 28% 50%)' } 
        }
    }
};