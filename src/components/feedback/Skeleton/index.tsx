import {Box, Skeleton as MuiSkeleton} from '@mui/material';

interface SkeletonProps {
    lines?: number;
}

const Skeleton = ({lines = 3}: SkeletonProps) => (
    <Box>
        {Array.from({length: lines}).map((_, i) => (
            <MuiSkeleton key={i} variant="rectangular" height={20} sx={{mb: 1, borderRadius: 1}}/>
        ))}
    </Box>
);

export default Skeleton;

