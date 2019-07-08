export const SHAPES = {
    data() {
        return {
            triangleOuter: { 'clip-path': 'polygon(50% 0%, 0 100%, 100% 100%)' },
            triangleInner: { 'clip-path': 'polygon(50% 10%, 7% 96%, 93% 96%)' },
            reverseTriangleOuter: { 'clip-path': 'polygon(50% 100%, 0 0, 100% 0)' },
            reverseTriangleInner: { 'clip-path': 'polygon(50% 90%, 7% 4%, 93% 4%)' },
            triangleLeftOuter: { 'clip-path': 'polygon(0 0, 0% 100%, 100% 0)' },
            triangleLeftInner: { 'clip-path': 'polygon(0 0, 0% 90%, 90% 0)' },
            triangleRightOuter: { 'clip-path': 'polygon(0 0, 100% 100%, 100% 0)' },
            triangleRightInner: { 'clip-path': 'polygon(10% 0, 100% 90%, 100% 0)' },
            triangleBottomInner: { 'clip-path': 'polygon(50% 10%, 5% 100%, 95% 100%)' },        
            rhombusOuter: { 'clip-path': 'polygon(50% 0, 90% 50%, 50% 100%, 10% 50%)' },
            rhombusInner: { 'clip-path': 'polygon(50% 5%, 85% 50%, 50% 95%, 15% 50%)' } 
        }
    }
};