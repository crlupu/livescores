import Image from "next/image";

export default function Icon({source, description, width}: {source: string, description?: string, width?: number}) {
    return (
        <Image
            src={source}
            alt={description || 'image'}
            sizes="100vw"
            style={{
                width: 'auto',
                height: '30px',
            }}
            width={width || 24}
            height={0}
        />
    )
}