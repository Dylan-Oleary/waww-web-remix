import { Input } from "@mantine/core";
import { Form, useTransition } from "@remix-run/react";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";

import {
    Button,
    CertificationSelectItem,
    MultiSelect,
    RangeSlider,
    Slider,
    Switch
} from "@/components";
import { Stack } from "@/layouts";
import { DiscoverMoviesFormSchemaConfig } from "./schema";

import type { SelectItem } from "@mantine/core";
import type { FormProps } from "@remix-run/react";
import type { ForwardRefRenderFunction } from "react";

import type { CertificationSelectItemData } from "@/components";
import type { TmdbCertification, TmdbGenre, TmdbWatchProvider } from "@/schema";
import type { DiscoverMoviesFormData } from "./schema";

export type DiscoverMoviesFormHandle = {
    onPageChange: (newPage: number) => void;
};

export type DiscoverMoviesFormProps = FormProps & {
    certifications?: TmdbCertification[];
    initialData?: DiscoverMoviesFormData;
    genres?: TmdbGenre[];
    watchProviders?: TmdbWatchProvider[];
};

const FormComponent: ForwardRefRenderFunction<DiscoverMoviesFormHandle, DiscoverMoviesFormProps> = (
    { certifications = [], genres = [], initialData = {}, watchProviders = [], ...props },
    forwardedRef
) => {
    const formRef = useRef<HTMLFormElement>(null);
    const pageInputRef = useRef<HTMLInputElement>(null);
    const { state } = useTransition();

    const certificationMultiSelectData = useMemo<Array<SelectItem & CertificationSelectItemData>>(
        () =>
            certifications.map(({ certification, meaning }) => ({
                description: meaning,
                label: certification,
                value: certification
            })),
        []
    );
    const genreMultiSelectData = useMemo<SelectItem[]>(
        () => genres.map(({ id, name }) => ({ label: name, value: String(id) })),
        []
    );
    const watchProviderSelectData = useMemo<SelectItem[]>(
        () =>
            watchProviders.map(({ provider_id, provider_name, logo_path }) => ({
                label: provider_name,
                imageProps: {
                    src: logo_path
                },
                value: String(provider_id)
            })),
        []
    );
    const isSubmitButtonDisabled = state === "loading" || state === "submitting";

    useImperativeHandle(
        forwardedRef,
        () => ({
            onPageChange: (page) => {
                pageInputRef.current!.value = String(page ?? 1);
                formRef.current?.submit();
            }
        }),
        []
    );

    return (
        <Form ref={formRef} reloadDocument {...props}>
            <Stack>
                <Input
                    defaultValue={DiscoverMoviesFormSchemaConfig.page.defaultValue}
                    name="page"
                    ref={pageInputRef}
                    type="hidden"
                />
                {/* Release Windows */}
                {/* PICK FOR ME! === 3 random movies vs a paginated list */}
                {genreMultiSelectData.length > 0 ? (
                    <MultiSelect
                        aria-label="Genre selection field"
                        clearable
                        clearButtonLabel="Clear genre selection field"
                        data={genreMultiSelectData}
                        defaultValue={initialData["with_genres"]}
                        label="Genres"
                        name="with_genres"
                        placeholder="Select genres"
                        searchable
                    />
                ) : null}
                {watchProviderSelectData?.length > 0 ? (
                    <MultiSelect
                        aria-label="Service selection field"
                        clearable
                        clearButtonLabel="Clear service selection field"
                        data={watchProviderSelectData}
                        defaultValue={initialData["with_watch_providers"]}
                        label="Services"
                        name="with_watch_providers"
                        placeholder="Select services"
                        searchable
                    />
                ) : null}
                {certifications?.length > 0 ? (
                    <MultiSelect
                        aria-label="Certification selection field"
                        clearable
                        clearButtonLabel="Clear certification selection field"
                        data={certificationMultiSelectData}
                        defaultValue={initialData["certifications"]}
                        itemComponent={CertificationSelectItem}
                        label="Certifications"
                        name="certifications"
                        placeholder="Select certifications"
                        searchable
                        zIndex={99}
                    />
                ) : null}
                <Input.Wrapper id="vote_average.gte" label="Minimum Audience Score" mb={26}>
                    <Slider
                        defaultValue={initialData["vote_average.gte"]}
                        marks={[
                            { label: "0", value: 0 },
                            { label: "25", value: 25 },
                            { label: "50", value: 50 },
                            { label: "75", value: 75 },
                            { label: "100", value: 100 }
                        ]}
                        max={DiscoverMoviesFormSchemaConfig["vote_average.gte"].max}
                        min={DiscoverMoviesFormSchemaConfig["vote_average.gte"].min}
                        name="vote_average.gte"
                        theme="primary"
                        thumbLabel="Minimum audience score thumb"
                    />
                </Input.Wrapper>
                {/* 
                Runtime filtering seems to be throwing incorrect results
                https://www.themoviedb.org/talk/5d6ee5296aa8e0735e424e6c
                /*}
                {/* <Input.Wrapper label="Runtime" my={26}>
                    <RangeSlider
                        defaultValue={[
                            initialData["with_runtime.lte_from"] as number,
                            initialData["with_runtime.lte_to"] as number
                        ]}
                        label={(value) =>
                            value === 0 ? "0" : `${value / 60}h${value === 180 ? "+" : ""}`
                        }
                        marks={[
                            { label: "0", value: 0 },
                            { value: 30 },
                            { label: "1h", value: 60 },
                            { value: 90 },
                            { label: "2h", value: 120 },
                            { value: 150 },
                            { label: "3h+", value: 180 }
                        ]}
                        max={DiscoverMoviesFormSchemaConfig["with_runtime.lte_from"].max}
                        min={DiscoverMoviesFormSchemaConfig["with_runtime.lte_from"].min}
                        minRange={30}
                        name="with_runtime.lte"
                        theme="primary"
                        thumbFromLabel="Minimum runtime thumb"
                        thumbToLabel="Maximum runtime thumb"
                        step={30}
                    />
                </Input.Wrapper> */}
                <Switch
                    defaultChecked={!!initialData["include_adult"]}
                    name="include_adult"
                    labelPosition="left"
                    label="Include 18+"
                />
                <Button disabled={isSubmitButtonDisabled} mt={26} type="submit">
                    Submit
                </Button>
            </Stack>
        </Form>
    );
};
export const DiscoverMoviesForm = forwardRef(FormComponent);
