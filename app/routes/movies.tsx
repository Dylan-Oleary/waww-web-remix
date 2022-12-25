import { useLoaderData } from "@remix-run/react";
import { useRef, useState } from "react";

import { Alert, Button, Card, Drawer, MediaGrid, Pagination } from "@/components";
import { DiscoverMoviesForm } from "@/forms";
import { Grid, Stack } from "@/layouts";
import { moviesRouteLoader } from "@/loaders";
import { TmdbMediumEnumSchema } from "@/schema";
import { useStyles } from "@/styles/routes/movies";

import type { DiscoverMoviesFormHandle } from "@/forms";
import type { MoviesRouteLoaderData } from "@/loaders";

export { moviesRouteLoader as loader };
export default function Index() {
    const formRef = useRef<DiscoverMoviesFormHandle>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const { classes, cx } = useStyles();
    const { certifications, error, formData, genres, pagination, tmdbResponse, watchProviders } =
        useLoaderData<MoviesRouteLoaderData>();
    const movies = tmdbResponse?.results ?? [];

    const handlePageChange = (newPage: number): void => formRef.current?.onPageChange(newPage);

    return (
        <div className={classes.container}>
            <Grid>
                <Grid.Col className={classes.formColumn} span={0} lg={4} p={0} pr={16}>
                    <Card className={classes.formCard}>
                        <DiscoverMoviesForm
                            certifications={certifications ?? []}
                            genres={genres ?? []}
                            initialData={formData}
                            method="get"
                            ref={formRef}
                            watchProviders={watchProviders ?? []}
                        />
                    </Card>
                </Grid.Col>
                <Grid.Col span={12} lg={8} p={0}>
                    <Card
                        className={classes.resultsCard}
                        childContainerClassName={classes.resultsCardContainer}
                    >
                        {error?.status ? (
                            <Alert title="Uh-oh!">
                                We weren't able to process that request – please try again.
                            </Alert>
                        ) : (
                            <Stack>
                                <MediaGrid data={movies} medium={TmdbMediumEnumSchema.Enum.movie} />
                                {!!(pagination && movies.length > 0) ? (
                                    <Pagination
                                        onChange={handlePageChange}
                                        page={pagination?.page}
                                        total={pagination?.total}
                                        withEdges
                                    />
                                ) : null}
                            </Stack>
                        )}
                    </Card>
                </Grid.Col>
            </Grid>
            <Button
                className={cx(classes.mobileOnly, classes.drawerTrigger)}
                onClick={() => setIsDrawerOpen(true)}
                radius="xl"
                variant="filled"
            >
                Filters
            </Button>
            <Drawer
                className={classes.mobileOnly}
                opened={isDrawerOpen}
                position="right"
                title="Filters"
                onClose={() => setIsDrawerOpen(false)}
                padding="xl"
                size="lg"
            >
                <DiscoverMoviesForm
                    certifications={certifications ?? []}
                    genres={genres ?? []}
                    initialData={formData}
                    method="get"
                    ref={formRef}
                    watchProviders={watchProviders ?? []}
                />
            </Drawer>
        </div>
    );
}
