export const convertScoreToVoteAverage = (score: number = 0): number =>
    parseFloat(((score / 100) * 10).toFixed(1));

export const convertVoteAverageToScore = (voteAverage: number = 0): number =>
    parseFloat((voteAverage * 10).toFixed(1));
